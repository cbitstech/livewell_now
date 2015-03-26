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

    debugger;

    $scope.code = parseInt($routeParams.id) || 1;
    $scope.selectedIntervention = _.where($scope.interventionGroups, {code:$scope.code})[0];

  });
