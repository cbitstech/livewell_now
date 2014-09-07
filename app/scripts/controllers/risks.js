'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:RisksCtrl
 * @description
 * # RisksCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('RisksCtrl', function ($scope) {
    //risk variables
    $scope.smarts = [
    {name:"Sleep",value:""},
    {name:"Medicine",value:"something"},
    {name:"Abstinence",value:""},
    {name:"Routine",value:""},
    {name:"Tranquil",value:""},
    {name:"Social",value:""}
    ];


  });
