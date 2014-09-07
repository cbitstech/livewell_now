'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewCtrl', function ($scope,$sanitize) {
    $scope.pageTitle = "Daily Review";

    $scope.medicationPercentage = .3;
    $scope.sleepPercentage = .8;
    $scope.routinePercentage = .4;
    $scope.wellnessPercentage = .1;


    $scope.reviewResponse ='Sorry to hear you\'re not taking all of your medications. <Br/>How about using LiveWell to help?';

  });
