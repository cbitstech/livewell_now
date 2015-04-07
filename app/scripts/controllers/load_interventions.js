'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LoadInterventionsReviewCtrl
 * @description
 * # LoadInterventionsReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LoadInterventionsCtrl', function ($scope, UserData) {

    $scope.pageTitle = 'Topics';

    $scope.hierarchy = UserData.query('interventionLabels');
  });
