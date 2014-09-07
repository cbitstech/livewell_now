'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:AwarenessCtrl
 * @description
 * # AwarenessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('AwarenessCtrl', function ($scope,UserData) {

    //awareness variables
    $scope.awareness = UserData.query('awareness');


  });
