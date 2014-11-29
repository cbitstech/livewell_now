'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewCtrl', function ($scope) {
    $scope.pageTitle = "Daily Review";

$scope.percentageGroups = [
{
		code:5,
    medicationPercentage : .88,
    sleepPercentage : .65,
    routinePercentage : .88,
    wellnessPercentage : 1,
    medicationClass : 'success',
    sleepClass : 'warning',
    routineClass : 'success',
    wellnessClass : 'success',
    response: 'Glad to see you\'re doing well. That\'s great! Keep up the good work. Try getting a bit more sleep in order to stay well.'
 },
 {
		code:11,
    medicationPercentage : .88,
    sleepPercentage : .81,
    routinePercentage : .88,
    wellnessPercentage : .75,
    medicationClass : 'success',
    sleepClass : 'success',
    routineClass : 'success',
    wellnessClass : 'warning'
 },
 {
		code:8,
    medicationPercentage : .60,
    sleepPercentage : .80,
    routinePercentage : .75,
    wellnessPercentage : .90,
    medicationClass : 'warning',
    sleepClass : 'success',
    routineClass : 'success',
    wellnessClass : 'success'
 },
{
		code:2,
    medicationPercentage : .88,
    sleepPercentage : .81,
    routinePercentage : .70,
    wellnessPercentage : 1,
    medicationClass : 'success',
    sleepClass : 'success',
    routineClass : 'warning',
    wellnessClass : 'success'
 }

];
 
    

//cat 8

    $scope.medicationPercentage = $scope.percentageGroups[0].medicationPercentage;
    $scope.sleepPercentage = $scope.percentageGroups[0].sleepPercentage;
    $scope.routinePercentage = $scope.percentageGroups[0].routinePercentage;
    $scope.wellnessPercentage = $scope.percentageGroups[0].wellnessPercentage;

    $scope.medicationClass = $scope.percentageGroups[0].medicationClass;
    $scope.sleepClass = $scope.percentageGroups[0].sleepClass;
    $scope.routineClass = $scope.percentageGroups[0].routineClass;
    $scope.wellnessClass = $scope.percentageGroups[0].wellnessClass;
 
    


    $scope.reviewResponse = $scope.percentageGroups[0].response;

  });
