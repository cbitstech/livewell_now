'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('ScheduleCtrl', function ($scope,UserData) {
    $scope.pageTitle = "My Schedule";
    $scope.schedules = UserData.query('schedule');
    

  });
