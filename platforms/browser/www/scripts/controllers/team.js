'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('TeamCtrl', function ($scope, UserData) {
    $scope.pageTitle = "My Team";

    $scope.team = UserData.query('team');
    $scope.secureTeam = UserData.query('secureContent').team;
 });
