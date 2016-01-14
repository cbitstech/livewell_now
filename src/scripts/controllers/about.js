'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
