'use strict';

/**
 * @ngdoc service
 * @name livewellApp.dailyReview
 * @description
 * # dailyReview
 * Service in the livewellApp.
 */
angular.module('livewellApp')
  .service('DailyReviewAlgorithm', function (Pound,UserData) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {}, recoder = {}, history= {}, dailyCheckInData = {}, conditions = [];

    var sleepRoutineRanges = UserData.query('sleepRoutineRanges');
		var currentClinicalStatusCode = UserData.query('clinicalStatus').currentCode;
		var dailyReviewResponses = Pound.find('dailyCheckIn');

		recoder.execute = function(sleepRoutineRanges,dailyReviewResponses){

		 	var historySeed = {}, trimmedDailyReviewResponses = dailyReviewResponses.splice(dailyReviewResponses.length-7) || [];

	    historySeed.wellness   							= [0,0,0,0,0,0,0]; 	// wellness balanced 7 days
			historySeed.medications    					= [1,1,1,1,1,1,1]; 	// took all meds 7 days
			historySeed.sleep										= [0,0,0,0,0,0,0]; 	// in baseline range 7 days
			historySeed.routine			 						= [2,2,2,2,2,2,2]; 	// in both windows 7 days

	  	for (var i = 0; i < 7 ; i++) { 
	  		var responsePosition = trimmedDailyReviewResponses.length + i - 7;
	  		if(responsePosition > -1){
	  		historySeed.wellness[i] 		= parseInt(trimmedDailyReviewResponses[responsePosition].wellness);
	  		historySeed.medications[i] 	= recoder.medications(trimmedDailyReviewResponses[responsePosition].medications);
	  		historySeed.sleep[i] 				= recoder.sleep(trimmedDailyReviewResponses[responsePosition].toBed,trimmedDailyReviewResponses[responsePosition].gotUp,sleepRoutineRanges);
	  		historySeed.routine[i] 			= recoder.routine(trimmedDailyReviewResponses[responsePosition].toBed,trimmedDailyReviewResponses[responsePosition].gotUp,sleepRoutineRanges);
				}
			}

			return historySeed
		}

    recoder.medications = function(medications){
    	
    	switch (medications){

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

   	recoder.sleep = function(gotUp, toBed, sleepRoutineRanges){
    	var score = 0;

    	// duration = gotUp - toBed
    	// look at ranges defined in sleepRoutineRanges, which range is it in?

    	var numGotUp = parseInt(gotUp);
    	var numToBed = parseInt(toBed);

    	if (numGotUp < numToBed){
    		numGotUp = numGotUp + 2400;
    	}

    	var duration = numGotUp - numToBed;

    	if (duration % 100 == 30) {
    		duration = duration + 20;
    	}

    	duration = duration / 100;

			if (duration < sleepRoutineRanges.lessSevere){
				score = -1;
			}

			if (duration > sleepRoutineRanges.moreSevere){
				score = 1;
			}

			if (duration < sleepRoutineRanges.less && duration >= sleepRoutineRanges.lessSevere){
				score = -0.5;
			}

			if (duration > sleepRoutineRanges.more && duration <= sleepRoutineRanges.moreSevere){
				score = 0.5;
			}

    	return score
    }

    recoder.routine = function(toBed, gotUp, sleepRoutineRanges){
    	var sum = 0;
    	var range = sleepRoutineRanges;
    	
    	var numGotUp = parseInt(gotUp);
    	var numToBed = parseInt(toBed);
    	var bedTimeStart = parseInt(sleepRoutineRanges.BedTimeStrt_MT);
    	var bedTimeStop = parseInt(sleepRoutineRanges.BedTimeStop_MT);
    	var riseTimeStart = parseInt(sleepRoutineRanges.RiseTimeStrt_MT);
    	var riseTimeStop = parseInt(sleepRoutineRanges.RiseTimeStop_MT);

    	if (bedTimeStart > bedTimeStop){
    		bedTimeStop = bedTimeStop + 2400;
    	}

    	if (riseTimeStart > riseTimeStop){
    		riseTimeStop = riseTimeStop + 2400;
    	}

    	if (numGotUp < riseTimeStart &&  numGotUp < riseTimeStop){
    		numToBed = numToBed + 2400;
    	}

    	if(numGotUp >= riseTimeStart && numGotUp <= riseTimeStop){
    		sum++
    	}

    	if (numToBed < bedTimeStart && numToBed < bedTimeStop){
    		numToBed = numToBed + 2400;
    	}

    	if(numToBed >= bedTimeStart && numToBed <= bedTimeStop){
    		sum++
    	}
    	return parseInt(sum)
    }

		conditions[26] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[25] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[24] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[23] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[22] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[21] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[20] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};	
		conditions[19] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[18] = function(data,code){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[17] = function(data,code){
			//mild down well
			return data.wellness[6] == -2 && code == 1;
		};
		conditions[16] = function(data,code){
			//mild up well
			return data.wellness[6] == 2 && code == 1;
		};
		conditions[15] = function(data,code){
			//balanced prodromal
			return code == 4
		};
		conditions[14] = function(data,code){
			//balanced recovering
			return code == 3
		};
		conditions[13] = function(data,code){
			//mild down prodromal
			return data.wellness[6] == -2 && code == 2;
		};
		conditions[12] = function(data,code){
			//mild up prodromal
			return data.wellness[6] == 2 && code == 2;
		};
		conditions[11] = function(data,code){
			//mild down recovering
			return data.wellness[6] == -2 && code == 3;
		};
		conditions[10] = function(data,code){
			//mild up recovering
			return data.wellness[6] == 2 && code == 3;
		};
		conditions[9] = function(data,code){
			//moderate down
			return data.wellness[6] == -3 && code !== 4;
		};
		conditions[8] = function(data,code){
			//moderate up
			return data.wellness[6] == 3 && code !== 4;
		};
		conditions[7] = function(data,code){
			//balanced unwell
			return code == 4;
		};
		conditions[6] = function(data,code){
			//mild down unwell
			return data.wellness[6] == -2 && code == 4;
		};
		conditions[5] = function(data,code){
			//mild up unwell
			return data.wellness[6] == 2 && code == 4;
		};
		conditions[4] = function(data,code){
			//moderate down unwell
			return data.wellness[6] == -3 && code == 4;
		};
		conditions[3] = function(data,code){
			//moderate up unwell
			return data.wellness[6] == 3 && code == 4;
		};
		conditions[2] = function(data,code){
			//logic for severe down			
			return data.wellness[6] == -4;
		};
		conditions[1] = function(data,code){
			//logic for severe up			
			return data.wellness[6] == 4;
		};

// "[{"code":1,"label":"well"},{"code":2,"label":"prodromal"},{"code":3,"label":"recovering"},{"code":4,"label":"unwell"}]"

    contents.getCode = function(){

    		//look for the highest TRUE value in the condition set
				debugger;
    		
    		var recodedSevenDays = recoder.execute(sleepRoutineRanges,dailyReviewResponses);

    		console.log(recodedSevenDays);

    		for(var i; i++; ){

    			if (conditions[i](recodedSevenDays,currentClinicalStatusCode) == true){
    				return i
    				break;
    			}

    		}

    		debugger;
    }

    return contents


  });
