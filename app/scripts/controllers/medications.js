'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('MedicationsCtrl', function ($scope,UserData) {
    $scope.pageTitle = "My Medications";
    $scope.medications = UserData.query('medications');


    
  });
