'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:InterventionCtrl
 * @description
 * # InterventionCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('InterventionCtrl', function ($scope, $routeParams,Questions) {
	$scope.pageTitle = "Daily Review";

	console.log($routeParams);
	$scope.questionGroups = Questions.query($routeParams.code);
	
	$scope.code = $routeParams.code;

	$scope.hideProgressBar = true;

	var pr = new PurpleRobot();
	pr.disableTrigger('dailyCheckIn1').disableTrigger('dailyCheckIn2').disableTrigger('dailyCheckIn3').disableTrigger('dailyCheckIn4').disableTrigger('dailyCheckIn5').disableTrigger('dailyCheckIn6').execute();
});
