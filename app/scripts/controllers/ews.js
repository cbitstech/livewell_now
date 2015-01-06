'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('EwsCtrl', function ($scope,UserData) {

  	$scope.pageTitle = "Weekly Check In";

    $scope.ews = UserData.query('ews');


  });
