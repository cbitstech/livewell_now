'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:RisksCtrl
 * @description
 * # RisksCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('RisksCtrl', function ($scope,UserData) {
    //risk variables
    $scope.smarts = UserData.query('smarts');



  });
