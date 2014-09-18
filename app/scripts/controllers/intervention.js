'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:InterventionCtrl
 * @description
 * # InterventionCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('InterventionCtrl', function ($scope, Questions) {
    $scope.pageTitle = "Intervention";

    $scope.questionGroups = Questions.query('cyoa');

    $scope.hideProgressBar = true;
    console.log($scope.questionGroups);

  });
