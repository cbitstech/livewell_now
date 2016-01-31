'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewCtrl', function ($scope,$routeParams,UserData,Pound,DailyReviewAlgorithm,ClinicalStatusUpdate,Guid) {
    $scope.pageTitle = "Daily Review";
    Pound.add('dailyReviewStarted',{userStarted:true, code:$scope.code});

    $scope.interventionGroups = UserData.query('dailyReview');

    $scope.updatedClinicalStatus = {};

    var runAlgorithm = function(Pound){
    	var object = {};
        var sessionID = Guid.create();
    
    	object.code = DailyReviewAlgorithm.code();
    	$scope.updatedClinicalStatus = ClinicalStatusUpdate.execute();

        (new PurpleRobot()).emitReading('livewell_dailyreviewcode',{sessionGUID: sessionID, code:object.code}).execute();
        (new PurpleRobot()).emitReading('livewell_clinicalstatus',{sessionGUID: sessionID, status:$scope.updatedClinicalStatus}).execute();

    	return object

    }

    $scope.code = runAlgorithm().code;
   
    //TO REMOVE
    $scope.recodedResponses = DailyReviewAlgorithm.recodedResponses();
    $scope.dailyCheckInResponseArray = Pound.find('dailyCheckIn')
    $scope.dailyCheckInResponses = ' |today| ' +JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-1]) +' |t-1| ' +JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-2]) + ' |t-2| ' + JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-3])+ ' |t-3| ' + JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-4]) + ' |t-4| ' + JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-5])+ ' |t-5| ' + JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-6])+ ' |t-6| ' + JSON.stringify($scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length-7]);

		//STOP REMOVE

    $scope.percentages = DailyReviewAlgorithm.percentages();

    $(".modal-backdrop").remove();

    var latestWarning = Pound.find('clinical_reachout')[Pound.find('clinical_reachout').length-1];

    if (latestWarning != undefined){
        if (latestWarning.shownToUser == undefined){
            $scope.warningMessage = Pound.find('clinical_reachout')[Pound.find('clinical_reachout').length-1].message
            $scope.phoneNumber = _.where(JSON.parse(localStorage.team),{role:'Psychiatrist'})[0].phone;
            $scope.coachNumber = _.where(JSON.parse(localStorage.team),{role:'Coach'})[0].phone;

            (new PurpleRobot()).emitReading('livewell_email',{email:$scope.coachNumber + ',' + $scope.phoneNumber, message: $scope.warningMessage}).execute();

            latestWarning.shownToUser = true;
            Pound.update('clinical_reachout',latestWarning);
            $scope.showWarning = true;
            $("#warning").modal();
        }
    }



    $scope.dailyReviewCategory = _.where($scope.interventionGroups, {code:$scope.code})[0].questionSet;

		$scope.interventionResponse = function(){ 

			if ($scope.code == 1 || $scope.code == 2 ){ 
					return 'Please contact your care provider or hospital';
			}
			else {
				if (_.where($scope.interventionGroups, {code:$scope.code})[0] != undefined){
					if(typeof(_.where($scope.interventionGroups, {code:$scope.code})[0].response) == 'object'){
							return _.where($scope.interventionGroups, {code:$scope.code})[0].response[Math.floor((Math.random() * _.where($scope.interventionGroups, {code:$scope.code})[0].response.length)	)]
					}
					else {
							return _.where($scope.interventionGroups, {code:$scope.code})[0].response
					}
				}
			}
		}


  });
