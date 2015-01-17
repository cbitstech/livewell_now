'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsAwarenessCtrl
 * @description
 * # SkillsAwarenessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SkillsAwarenessCtrl', function ($scope) {

  	$scope.pageTitle = "Awareness";

    $scope.mainLinks = [
    {name:"Life Chart", id:540, post:'skills_awareness'},
    {name:"Signs Checklist", id:541, post:'skills_awareness'},
	{name:"Triggers Checklist", id:542, post:'skills_awareness'}
		]
  });
