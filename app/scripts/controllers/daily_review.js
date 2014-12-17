'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewCtrl', function ($scope,$routeParams) {
    $scope.pageTitle = "Daily Review";



$scope.interventionGroups = [
{
	code:5,
    questionSet:"sleep",
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
    questionSet:'symptom-milddown-prodself',
    medicationPercentage : .88,
    sleepPercentage : .81,
    routinePercentage : .88,
    wellnessPercentage : .75,
    medicationClass : 'success',
    sleepClass : 'success',
    routineClass : 'success',
    wellnessClass : 'warning',
    response: 'Sorry to hear you\'re down. You\'re doing the right thing by participating in this program! Things can get better.'
 },
 {
	code:8,
    questionSet:'at-risk-medications',
    medicationPercentage : .60,
    sleepPercentage : .80,
    routinePercentage : .75,
    wellnessPercentage : .90,
    medicationClass : 'warning',
    sleepClass : 'success',
    routineClass : 'success',
    wellnessClass : 'success',
    response: 'I see you\'re well, which is great! Let\'s keep that going. Looks like you may need to adjust your medication schedule in order to do so.'
 },
{
	code:2,
    questionSet:'at-risk-routine',
    medicationPercentage : .88,
    sleepPercentage : .81,
    routinePercentage : .70,
    wellnessPercentage : 1,
    medicationClass : 'success',
    sleepClass : 'success',
    routineClass : 'warning',
    wellnessClass : 'success',
    response: 'I see you\'re doing well. That\'s fantastic! Keep it up. Try getting your routine more consistent in order to stay well.'
 },
{
        code:1,
        questionSet:'well',
    medicationPercentage : 1,
    sleepPercentage : 1,
    routinePercentage : 1,
    wellnessPercentage : 1,
    medicationClass : 'success',
    sleepClass : 'success',
    routineClass : 'success',
    wellnessClass : 'success',
    response: 'I see you\'ve been well for several days now. Your medications, sleep, and routine are in order. Keep up the good work!'
 }

];

    $scope.code = parseInt($routeParams.id) || 1;
    $scope.selectedIntervention = _.where($scope.interventionGroups, {code:$scope.code})[0];

  });
