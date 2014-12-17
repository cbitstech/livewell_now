'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:InterventionCtrl
 * @description
 * # InterventionCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('InterventionCtrl', function ($scope, $routeParams,Questions) {
    $scope.pageTitle = "Daily Review";

    console.log($routeParams);
    $scope.questionGroups = Questions.query($routeParams.code);

    $scope.hideProgressBar = true;
    console.log($scope.questionGroups);

  });
