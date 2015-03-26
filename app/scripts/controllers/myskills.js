'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:MyskillsCtrl
 * @description
 * # MyskillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('MyskillsCtrl', function ($scope,$location) {

    $scope.pageTitle = 'My Skills';

    $scope.mySkills = JSON.parse(localStorage['mySkills']);

  });
