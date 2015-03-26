'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LoadInterventionsCtrl
 * @description
 * # LoadInterventionsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LoadInterventionsCtrl', function ($scope, $location, UserData) {
    
    $scope.pageTitle = 'Topics';

  	$scope.hierarchy = UserData.query('interventionLabels');

  });
