'use strict';

/**
 * @ngdoc service
 * @name livewellApp.dailyReview
 * @description
 * # dailyReview
 * Service in the livewellApp.
 */
angular.module('livewellApp')
  .service('dailyReview', function (Pound,UserData) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {};

    var recoder = {}, history= {}, historySeed = {}, dailyCheckInData = {};
    var conditions = [];

    var sleepRoutineRanges = UserData.query('sleepRoutineRanges');
		var currentClinicalStatusCode = UserData.query('clinicalStatus').currentCode;
		var dailyReviewResponses = Pound.find('dailyCheckIn');

    historySeed.wellness   							= [0,0,0,0,0,0,0]; 	// wellness balanced 7 days
		historySeed.medications    					= [1,1,1,1,1,1,1]; 	// took all meds 7 days
		historySeed.sleep										= [0,0,0,0,0,0,0]; 	// in baseline range 7 days
		historySeed.routine			 						= [2,2,2,2,2,2,2]; 	// in both windows 7 days


		dailyCheckInData.


    recoder.wellness = function(){
    	var code = null;

    	return code
    }

    recoder.medications = function(){
    	var code = null;

    	return code
    }

   	recoder.sleep = function(toBed,gotUp,sleepRoutineRanges){
    	var score = 0;

    	// duration = gotUp - toBed
    	// look at ranges defined in sleepRoutineRanges, which range is it in?

			if (duration < lessSevere){
				score = -1;
			}

			if (duration > moreSevere){
				score = 1;
			}

			if (duration < less && duration >= lessSevere){
				score = -0.5;
			}

			if (duration > more && duration <= moreSevere){
				score = 0.5;
			}

    	return score
    }

    recoder.routine = function(){
    	var sum = 0;


    	//look at rise time, is it in in rise time window defined in sleepRoutineRanges, if so, add 1 to sum
			//look at to bed time, is it in in to bed time window defined in sleepRoutineRanges, if so, add 1 to sum

			//if end time is less than start time, add 24 hours to range

			


    	return sum
    }

		conditions[26] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[25] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[24] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[23] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[22] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[21] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[20] = function(){
			var boolean = false;
			//logic
			return boolean
		};	
		conditions[19] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[18] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[17] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[16] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[15] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[14] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[13] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[12] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[11] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[10] = function(){
			var boolean = true;
			//logic
			return boolean
		};
		conditions[9] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[8] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[7] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[6] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[5] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[4] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[3] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[2] = function(){
			var boolean = true;
			//logic
			return boolean
		};
		conditions[1] = function(){
			var boolean = false;
			//logic
			return boolean
		};
		conditions[0]	= null;

    contents.getCode = function(){

    		//look for the highest TRUE value in the condition set
    		debugger;
    		for(var i = conditions.length; i--; ){

    			if (conditions[i]() == true){
    				return i
    				break;
    			}

    		}

    }

    return contents


  });
