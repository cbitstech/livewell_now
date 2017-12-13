'use strict';
/**
 * @ngdoc service
 * @name livewellApp.dailyReview
 * @description
 * # dailyReview
 * Service in the livewellApp.
 */
angular.module('livewellApp').service('DailyReviewAlgorithm', function(Pound, UserData) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var contents = {},
		recoder = {},
		history = {},
		dailyCheckInData = {},
		conditions = [];

	var sleepRoutineRanges = UserData.query('sleepRoutineRanges');

	var currentClinicalStatusCode = function() {
		return UserData.query('clinicalStatus').currentCode
	};
	
	var dailyReviewResponses = Pound.find('dailyCheckIn');
	
	recoder.execute = function(sleepRoutineRanges, dailyReviewResponses) {
		var historySeed = {};
		historySeed.wellness = [0, 0, 0, 0, 0, 0, 0]; // wellness balanced 7 days
		historySeed.medications = [1, 1, 1, 1, 1, 1, 1]; // took all meds 7 days
		historySeed.sleep = [0, 0, 0, 0, 0, 0, 0]; // in baseline range 7 days
		historySeed.routine = [2, 2, 2, 2, 2, 2, 2]; // in both windows 7 days

		for (var i = 0; i < 7; i++) {
			var responsePosition = dailyReviewResponses.length + i - 7;
			
			if (dailyReviewResponses[responsePosition] != undefined) {
				historySeed.wellness[i] = parseInt(dailyReviewResponses[responsePosition].wellness);
				historySeed.medications[i] = recoder.medications(dailyReviewResponses[responsePosition].medications);
				historySeed.sleep[i] = recoder.sleep(dailyReviewResponses[responsePosition].sleepDuration,sleepRoutineRanges);
				historySeed.routine[i] = recoder.routine(dailyReviewResponses[responsePosition].toBed, dailyReviewResponses[responsePosition].gotUp, sleepRoutineRanges);
			}
		}
		
		localStorage['recodedResponses'] = JSON.stringify(historySeed);

		return historySeed;
	}

	recoder.medications = function(medications) {
		switch (medications) {
			case '0':
				return 0
			break;
				case '1':
			return 0.5
				break;
			case '2':
				return 1
			break;
		}
	}

	recoder.sleep = function(sleepDuration, sleepRoutineRanges) {
		var score = 0;
		// duration = gotUp - toBed
		// look at ranges defined in sleepRoutineRanges, which range is it in?

		var duration = parseFloat(sleepDuration);

		if (duration <= sleepRoutineRanges.LessSevere) {
			score = -1;
		} else if (duration >= sleepRoutineRanges.MoreSevere) {
			score = 1;
		} else if (duration >= sleepRoutineRanges.Less && duration <= sleepRoutineRanges.More) {
			score = 0;
		} else if (duration < sleepRoutineRanges.Less && duration >= sleepRoutineRanges.LessSevere) {
			score = -0.5;
		} else if (duration > sleepRoutineRanges.More && duration <= sleepRoutineRanges.MoreSevere) {
			score = 0.5;
		}
		
		return score
	}

	recoder.routine = function(toBed, gotUp, sleepRoutineRanges) {
		var sum = 0;
		var range = sleepRoutineRanges;
		var numGotUp = parseInt(gotUp);
		var numToBed = parseInt(toBed);
		var bedTimeStart = parseInt(sleepRoutineRanges.BedTimeStrt_MT);
		var bedTimeStop = parseInt(sleepRoutineRanges.BedTimeStop_MT);
		var riseTimeStart = parseInt(sleepRoutineRanges.RiseTimeStrt_MT);
		var riseTimeStop = parseInt(sleepRoutineRanges.RiseTimeStop_MT);

		if (bedTimeStart > bedTimeStop) {
			bedTimeStop = bedTimeStop + 2400;
		}
		
		if (riseTimeStart > riseTimeStop) {
			riseTimeStop = riseTimeStop + 2400;
		}

		if (numGotUp < riseTimeStart && numGotUp < riseTimeStop) {
			numGotUp = numGotUp + 2400;
		}

		if (numToBed < bedTimeStart && numToBed < bedTimeStop) {
			numToBed = numToBed + 2400;
		}

		if (numGotUp >= riseTimeStart && numGotUp <= riseTimeStop) {
			sum++
		}

		if (numToBed >= bedTimeStart && numToBed <= bedTimeStop) {
			sum++
		}

		return parseInt(sum)
	};

	conditions[26] = function(data, code) {
		//well
		return true
	};

	conditions[25] = function(data, code) {
		//at risk routine
		//Baseline ≥ 3 of last 4 days   mrd ≠ Bedtime Window and/or mrd ≠ Risetime Window,               
		//Bedtime and Risetime Windows ≤ 5 of last 4 days
		var sum1 = data.routine[3] + data.routine[4] + data.routine[5] + data.routine[6];

		return code == 1 && Math.abs(data.wellness[6]) < 2 && ((data.routine[6] < 2 && sum1 <= 5))
	};
	
	conditions[24] = function(data, code) {
		//at risk sleep erratic
		//mrd ≠ Baseline,  Baseline ≤ 2 of last 4 days
		var sum1 = 0;
		if (data.sleep[3] == 0) {
			sum1++
		}

		if (data.sleep[4] == 0) {
			sum1++
		}

		if (data.sleep[5] == 0) {
			sum1++
		}

		if (data.sleep[6] == 0) {
			sum1++
		}

		return code == 1 && Math.abs(data.wellness[6]) < 2 && (data.sleep[6] != 0) && sum1 <= 2
	};
	
	conditions[23] = function(data, code) {
		//at risk sleep more
		//mrd = More or More-Severe, More or More-Severe ≥ 2 last 4 days, Less or Less-Severe  ≤ 1 last 4 days
		var sum1 = 0;

		if (data.sleep[3] == -1 || data.sleep[3] == -0.5) {
			sum1++
		}
		
		if (data.sleep[4] == -1 || data.sleep[4] == -0.5) {
			sum1++
		}
		
		if (data.sleep[5] == -1 || data.sleep[5] == -0.5) {
			sum1++
		}
		
		if (data.sleep[6] == -1 || data.sleep[6] == -0.5) {
			sum1++
		}

		var sum2 = 0;

		if (data.sleep[3] == 1 || data.sleep[3] == 0.5) {
			sum2++
		}
		
		if (data.sleep[4] == 1 || data.sleep[4] == 0.5) {
			sum2++
		}
		
		if (data.sleep[5] == 1 || data.sleep[5] == 0.5) {
			sum2++
		}
		
		if (data.sleep[6] == 1 || data.sleep[6] == 0.5) {
			sum2++
		}

		return code == 1 && Math.abs(data.wellness[6]) < 2 && (data.sleep[6] == 1 || data.sleep[6] == 0.5) && sum1 <= 1 && sum2 >= 2
	};

	conditions[22] = function(data, code) {
		//at risk sleep less
		//mrd = Less or Less-Severe, Less or Less-Severe ≥ 2 of last 4 days, More or More-Severe ≤ 1 of last 4 days

		var sum1 = 0;

		if (data.sleep[3] == -1 || data.sleep[3] == -0.5) {
			sum1++
		}
	
		if (data.sleep[4] == -1 || data.sleep[4] == -0.5) {
			sum1++
		}
	
		if (data.sleep[5] == -1 || data.sleep[5] == -0.5) {
			sum1++
		}
	
		if (data.sleep[6] == -1 || data.sleep[6] == -0.5) {
			sum1++
		}
	
		var sum2 = 0;
	
		if (data.sleep[3] == 1 || data.sleep[3] == 0.5) {
			sum2++
		}

		if (data.sleep[4] == 1 || data.sleep[4] == 0.5) {
			sum2++
		}

		if (data.sleep[5] == 1 || data.sleep[5] == 0.5) {
			sum2++
		}

		if (data.sleep[6] == 1 || data.sleep[6] == 0.5) {
			sum2++
		}

		return code == 1 && Math.abs(data.wellness[6]) < 2 && (data.sleep[6] == -1 || data.sleep[6] == -0.5) && sum1 >= 2 && sum2 <= 1;
	};
	
	conditions[21] = function(data, code) {
		//at risk medications
		return code == 1 && Math.abs(data.wellness[6]) < 2 && data.medications[6] != 1
	};
	
	conditions[20] = function(data, code) {
		//at risk sleep more severe
		//mrd = More-Severe, More-Severe ≥ 3 of last 4 days
		var sum = 0;

		if (data.sleep[3] == 1) {
			sum++
		}

		if (data.sleep[4] == 1) {
			sum++
		}

		if (data.sleep[5] == 1) {
			sum++
		}

		if (data.sleep[6] == 1) {
			sum++
		}

		var dailyReviewIsTrueWhen = code == 1 && Math.abs(data.wellness[6]) < 2 && data.sleep[6] == 1 && sum >= 3;

		if (dailyReviewIsTrueWhen){
			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 3){
				Pound.add('clinical_reachout',{call:'coach', message:'Call your psychiatrist about sleeping too much', code:20});        
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', code:20, clinicalStatus: clinicalStatus}).execute();
			} else if (sum == 4){
				Pound.add('clinical_reachout',{call:'coach', message:'Call your psychiatrist about sleeping too much', email:'psychiatrist', code:20});        
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:20, clinicalStatus: clinicalStatus}).execute();
			}
		}

		return dailyReviewIsTrueWhen
	};
	
	conditions[19] = function(data, code) {
		//at risk sleep less severe
		//mrd = Less-Severe, Less-Severe ≥ 2 of last 4 days
		var sum = 0;

		if (data.sleep[3] == -1) {
			sum++
		}

		if (data.sleep[4] == -1) {
			sum++
		}

		if (data.sleep[5] == -1) {
			sum++
		}

		if (data.sleep[6] == -1) {
			sum++
		}

		var dailyReviewIsTrueWhen = code == 1 && Math.abs(data.wellness[6]) < 2 && data.sleep[6] == -1 && sum >= 2;

		if (dailyReviewIsTrueWhen){
			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 2){
				Pound.add('clinical_reachout',{call:'coach', message:'Call your psychiatrist about sleeping too little', code:19});        
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', code:19, clinicalStatus: clinicalStatus}).execute();
			} else if (sum == 3){
				Pound.add('clinical_reachout',{call:'coach', message:'Call your psychiatrist about sleeping too little', email:'psychiatrist', code:19});        
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:19, clinicalStatus: clinicalStatus}).execute();
			}
		}

		return dailyReviewIsTrueWhen;
	};
	
	conditions[18] = function(data, code) {
		//at risk medications severe
		var sum = 0;

		if (data.medications[3] != 1) {
			sum++
		}

		if (data.medications[4] != 1) {
			sum++
		}

		if (data.medications[5] != 1) {
			sum++
		}

		if (data.medications[6] != 1) {
			sum++
		}

		var dailyReviewIsTrueWhen = code == 1 && Math.abs(data.wellness[6]) < 2 && data.medications[6] != 1 && sum >= 3;

		if (dailyReviewIsTrueWhen){
			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 3){                    
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about taking your medications', code:18});
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'psychiatrist', code:18, clinicalStatus: clinicalStatus}).execute();
			} else if (sum == 4){                    
				Pound.add('clinical_reachout',{message:'Call your psychiatrist about taking your medications', call:'psychiatrist', email:'coach', code:18});        
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:18, clinicalStatus: clinicalStatus}).execute();
			}
		}
		
		return dailyReviewIsTrueWhen;
	};
	
	conditions[17] = function(data, code) {
		//mild down well
		var dailyReviewIsTrueWhen = data.wellness[6] == -2 && code == 1;

		if (dailyReviewIsTrueWhen) {
			var sum = 0;

			if (Math.abs(data.wellness[3]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[4]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[5]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[6]) > 1) {
				sum++
			}

			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 3){                    
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', code:17}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', code:17, clinicalStatus: clinicalStatus}).execute();
			} else if (sum == 4){                    
				Pound.add('clinical_reachout',{call:'coach', message:'Call your psychiatrist about worsening symptoms', email:'psychiatrist',code:17}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:17, clinicalStatus: clinicalStatus}).execute();
			}
		}
		
		return dailyReviewIsTrueWhen;
	};
	
	conditions[16] = function(data, code) {
		//mild up well
		var dailyReviewIsTrueWhen = (data.wellness[6] == 2 && code == 1);

		if (dailyReviewIsTrueWhen){
			var sum = 0;

			if (Math.abs(data.wellness[3]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[4]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[5]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[6]) > 1) {
				sum++
			}

			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 2){                    
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', code:16}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', code:16, clinicalStatus: clinicalStatus}).execute();
			} else if (sum >= 3){                    
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', email:'psychiatrist',code:16}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:16, clinicalStatus: clinicalStatus}).execute();
			}
		}

		return dailyReviewIsTrueWhen
	};
	
	conditions[15] = function(data, code) {
		//balanced prodromal
		return code == 2
	};
	
	conditions[14] = function(data, code) {
		//balanced recovering
		return code == 3
	};
	
	conditions[13] = function(data, code) {
		//mild down prodromal
		return data.wellness[6] == -2 && code == 2;
	};
	
	conditions[12] = function(data, code) {
		//mild up prodromal
		return data.wellness[6] == 2 && code == 2;
	};
	
	conditions[11] = function(data, code) {
		//mild down recovering
		return data.wellness[6] == -2 && code == 3;
	};
	
	conditions[10] = function(data, code) {
		//mild up recovering
		return data.wellness[6] == 2 && code == 3;
	};

	conditions[9] = function(data, code) {
		//moderate down
		var dailyReviewIsTrueWhen = data.wellness[6] == -3 && code != 4;

		if (dailyReviewIsTrueWhen && code == 1){
			var sum = 0;
			if (Math.abs(data.wellness[3]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[4]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[5]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[6]) > 1) {
				sum++
			}

			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 3){
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', code:9}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', code:9, clinicalStatus: clinicalStatus}).execute();
			} else if (sum == 4){
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', email:'psychiatrist',code:9}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:9, clinicalStatus: clinicalStatus}).execute();
			}
		}

		return dailyReviewIsTrueWhen
	};
	
	conditions[8] = function(data, code) {
		//moderate up
		var dailyReviewIsTrueWhen = data.wellness[6] == 3 && code != 4;

		if (dailyReviewIsTrueWhen && code == 1){
			var sum = 0;

			if (Math.abs(data.wellness[3]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[4]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[5]) > 1) {
				sum++
			}

			if (Math.abs(data.wellness[6]) > 1) {
				sum++
			}

			var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

			if (sum == 2){
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', code:8}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', code:8, clinicalStatus: clinicalStatus}).execute();
			} else if (sum >= 3){                    
				Pound.add('clinical_reachout',{call:'psychiatrist', message:'Call your psychiatrist about worsening symptoms', email:'psychiatrist',code:8}); 
				(new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', email:'psychiatrist', code:8, clinicalStatus: clinicalStatus}).execute();
			}
		}

		return dailyReviewIsTrueWhen
	};
	
	conditions[7] = function(data, code) {
		//balanced unwell
		return code == 4;
	};

	conditions[6] = function(data, code) {
		//mild down unwell
		return data.wellness[6] == -2 && code == 4;
	};

	conditions[5] = function(data, code) {
		//mild up unwell
		return data.wellness[6] == 2 && code == 4;
	};

	conditions[4] = function(data, code) {
		//moderate down unwell
		return data.wellness[6] == -3 && code == 4;
	};

	conditions[3] = function(data, code) {
		//moderate up unwell
		return data.wellness[6] == 3 && code == 4;
	};

	conditions[2] = function(data, code) {
		//logic for severe down         
		return data.wellness[6] == -4;
	};

	conditions[1] = function(data, code) {
		//logic for severe up           
		return data.wellness[6] == 4;  
	};

	conditions[0] = function() {
		return false;
	}
	
	// "[{"code":1,"label":"well"},{"code":2,"label":"prodromal"},{"code":3,"label":"recovering"},{"code":4,"label":"unwell"}]"
	recoder.wellnessFormatter = function(wellnessRating) {
		switch (wellnessRating) {
			case -4:
				return 0;
				break;
			case -3:
				return .25;
				break;
			case -2:
				return .5;
				break
			case -1:
				return 1;
				break;
			case 0:
				return 1;
				break;
			case 1:
				return 1;
				break;
			case 2:
				return 0.5;
				break;
			case 3:
				return 0.25;
				break;
			case 4:
				return 0;
				break;
		}
	}
	
	contents.getPercentages = function() {
		var contents = {};
		var recodedSevenDays = recoder.execute(sleepRoutineRanges, Pound.find('dailyCheckIn'));
		var sleepValues = {};
		sleepValues[-1] = 0;
		sleepValues[-0.5] = 0.25;
		sleepValues[0] = 1;
		sleepValues[0.5] = 0.5;
		sleepValues[1] = 0.25;
		contents.sleep = (sleepValues[recodedSevenDays.sleep[0]] + sleepValues[recodedSevenDays.sleep[1]] + sleepValues[recodedSevenDays.sleep[2]] + sleepValues[recodedSevenDays.sleep[3]] + sleepValues[recodedSevenDays.sleep[4]] + sleepValues[recodedSevenDays.sleep[5]] + sleepValues[recodedSevenDays.sleep[6]]) / 7;
		contents.wellness = (recoder.wellnessFormatter(recodedSevenDays.wellness[0]) + recoder.wellnessFormatter(recodedSevenDays.wellness[1]) + recoder.wellnessFormatter(recodedSevenDays.wellness[2]) + recoder.wellnessFormatter(recodedSevenDays.wellness[3]) + recoder.wellnessFormatter(recodedSevenDays.wellness[4]) + recoder.wellnessFormatter(recodedSevenDays.wellness[5]) + recoder.wellnessFormatter(recodedSevenDays.wellness[6])) / 7;
		contents.medications = (recodedSevenDays.medications[0] + recodedSevenDays.medications[1] + recodedSevenDays.medications[2] + recodedSevenDays.medications[3] + recodedSevenDays.medications[4] + recodedSevenDays.medications[5] + recodedSevenDays.medications[6]) / 7;
		contents.routine = (recodedSevenDays.routine[0] + recodedSevenDays.routine[1] + recodedSevenDays.routine[2] + recodedSevenDays.routine[3] + recodedSevenDays.routine[4] + recodedSevenDays.routine[5] + recodedSevenDays.routine[6]) / 14;
		return contents
	}

	contents.getCode = function() {
		//look for the highest TRUE value in the condition set
		var recodedSevenDays = recoder.execute(sleepRoutineRanges, Pound.find('dailyCheckIn'));
		var clinicalStatusCode = currentClinicalStatusCode()

		console.log(recodedSevenDays);

		for (var i = 0; i < conditions.length; i++) {
			var selection = conditions[i](recodedSevenDays, clinicalStatusCode);
			
			if (selection == true) {
				return i;
			}
		}
	};
	
	contents.code = function() {
		return contents.getCode()
	};

	contents.percentages = function(){
		return contents.getPercentages()
	};

	contents.recodedResponses = function() {
		return recoder.execute(sleepRoutineRanges, Pound.find('dailyCheckIn'))
	};

	return contents
});