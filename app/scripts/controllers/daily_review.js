'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewCtrl', function ($scope,$routeParams,UserData) {
    $scope.pageTitle = "Daily Review";

    $scope.interventionGroups = UserData.query('dailyReview');

    $scope.code = parseInt($routeParams.id) || 22;
    $scope.selectedIntervention = _.where($scope.interventionGroups, {code:$scope.code})[0];

		$scope.interventionResponse = function(){ 

			if (typeof($scope.selectedIntervention.response) == 'object'){

					return $scope.selectedIntervention.response[Math.floor((Math.random() * $scope.selectedIntervention.response.length) + 1)]
			}
				else{
					return $scope.selectedIntervention.response
				}
			
		}

  });
