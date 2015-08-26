'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewCtrl', function ($scope,$routeParams,UserData,Pound,DailyReviewAlgorithm,ClinicalStatusUpdate) {
    $scope.pageTitle = "Daily Review";
    Pound.add('dailyReviewStarted',{userStarted:true, code:$scope.code});


    $scope.interventionGroups = UserData.query('dailyReview');

    $scope.updatedClinicalStatus = {};

    var runAlgorithm = function(){
    	var object = {};
    	object.code = DailyReviewAlgorithm.code();
    	$scope.updatedClinicalStatus = ClinicalStatusUpdate.execute();

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

		var pr = new PurpleRobot();
		pr.disableTrigger('dailyReview').execute();

  });
