'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('Ews2Ctrl', function ($scope,UserData) {

  	$scope.pageTitle = "Weekly Check In";

    $scope.ews2 = UserData.query('ews2');


  });
