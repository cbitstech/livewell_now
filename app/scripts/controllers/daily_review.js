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

    $scope.medicationPercentage = 0;
    $scope.sleepPercentage = 0;
    $scope.routinePercentage = 0;
    $scope.wellnessPercentage = 0;

    $scope.reviewResponse = '<div class="alert-warning alert">No response exists</div>'

  });
