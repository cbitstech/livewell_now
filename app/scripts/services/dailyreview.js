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

		recoder.execute = function(sleepRoutineRanges,dailyReviewResponses,currentClinicalStatusCode){

		 	var historySeed = {}, maxIndexDayRangeNeededForAlgorithm = 6, trimmedDailyReviewResponses = dailyReviewResponses.splice(dailyReviewResponses.length-7) || [];

	    historySeed.wellness   							= [0,0,0,0,0,0,0]; 	// wellness balanced 7 days
			historySeed.medications    					= [1,1,1,1,1,1,1]; 	// took all meds 7 days
			historySeed.sleep										= [0,0,0,0,0,0,0]; 	// in baseline range 7 days
			historySeed.routine			 						= [2,2,2,2,2,2,2]; 	// in both windows 7 days

	  	for (var i = maxIndexDayRangeNeededForAlgorithm; i > -1 ; i--) { 

	  		if (trimmedDailyReviewResponses.length - i >0){
	  			debugger;
	  		historySeed.wellness[i] 		= trimmedDailyReviewResponses[i+6].wellness;
	  		historySeed.medications[i] 	= recoder.medications(trimmedDailyReviewResponses[i+6]);
	  		historySeed.sleep[i] 				= recoder.sleep(trimmedDailyReviewResponses[i+6].toBed,trimmedDailyReviewResponses[i].gotUp,sleepRoutineRanges);
	  		historySeed.routine[i] 			= recoder.routine(trimmedDailyReviewResponses[i+6].toBed,trimmedDailyReviewResponses[i+6].gotUp,sleepRoutineRanges);
	  		}
			}

			debugger;
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

    	if (numGotUp < numToBed){
    		numGotUp = numGotUp + 2400;
    	}
    	if (bedTimeStart > bedTimeStop){
    		bedTimeStop = bedTimeStop + 2400;
    	}
    	if (riseTimeStart > riseTimeStop){
    		riseTimeStop = riseTimeStop + 2400;
    	}

    	if(numGotUp >= riseTimeStart && numGotUp <= riseTimeStop){
    		sum++
    	}
    	if(numToBed >= bedTimeStart && numToBed <= bedTimeStop){
    		sum++
    	}

    	debugger;
    	return parseInt(sum)
    }

		conditions[26] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[25] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[24] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[23] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[22] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[21] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[20] = function(data){
			var boolean = false;
			//logic
			return boolean
		};	
		conditions[19] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[18] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[17] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[16] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[15] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[14] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[13] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[12] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[11] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[10] = function(data){
			var boolean = true;
			//logic
			return boolean
		};
		conditions[9] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[8] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[7] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[6] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[5] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[4] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[3] = function(data){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[2] = function(data){
			var boolean = true;
			//logic
			return boolean
		};
		conditions[1] = function(data){
			var boolean = false;
			//logic
			return boolean
		};

		conditions[0]	= null;

    contents.getCode = function(){

    		//look for the highest TRUE value in the condition set

    		var recodedSevenDays = recoder.execute(sleepRoutineRanges,dailyReviewResponses,currentClinicalStatusCode);

    		for(var i = conditions.length; i--; ){

    			if (conditions[i](recodedSevenDays) == true){
    				return i
    				break;
    			}

    		}

    }

    return contents


  });
