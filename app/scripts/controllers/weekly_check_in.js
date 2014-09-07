'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:WeeklyCheckInCtrl
 * @description
 * # WeeklyCheckInCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('WeeklyCheckInCtrl', function ($scope, Questions) {
    $scope.pageTitle = 'Weekly Check In';

    $scope.phq_questions = Questions.query('phq9');
    $scope.amrs_questions = Questions.query('amrs');
  
  });
