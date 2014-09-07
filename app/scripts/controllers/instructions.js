'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:InstructionsCtrl
 * @description
 * # InstructionsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('InstructionsCtrl', function ($scope, StaticContent) {
    $scope.pageTitle = "Instructions & Settings";
    $scope.instructionsContent = StaticContent.query('instructions');

  });
