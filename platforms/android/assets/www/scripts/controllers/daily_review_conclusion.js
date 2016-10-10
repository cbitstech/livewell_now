'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewConclusionCtrl
 * @description
 * # DailyReviewConclusionCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyReviewConclusionCtrl', function ($scope, $sanitize) {
    $scope.pageTitle = "Daily Review";
    $scope.lastNotification = "￼Keep up the good work!<br/>Check out your medication plan in Reduce Risk.";
  });
