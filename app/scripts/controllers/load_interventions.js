'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LoadInterventionsReviewCtrl
 * @description
 * # LoadInterventionsReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LoadInterventionsCtrl', function ($scope, UserData, $location, $filter) {

    $scope.pageTitle = 'Topics';

    $scope.hierarchy = UserData.query('interventionLabels');
    $scope.interventionGroups = UserData.query('dailyReview')

    debugger;

    $scope.goToIntervention = function(code){

    		$location.path('intervention/' + $filter('filter')($scope.interventionGroups,{code:code},true)[0].questionSet);

    }

  });
