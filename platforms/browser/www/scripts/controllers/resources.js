'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('ResourcesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
