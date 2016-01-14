'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyreviewtesterCtrl
 * @description
 * # DailyreviewtesterCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('DailyreviewtesterCtrl', function ($scope,Pound,dailyReview) {
    
    $scope.collection = Pound.find('dailyCheckIn');

    $scope.proposedIntervention = dailyReview.getCode();

  });
