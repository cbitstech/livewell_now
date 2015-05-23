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

  	$scope.pageTitle = "Self-Assessment";

    $scope.mainLinks = [
    {name:"Symptoms and Triggers", id:194, post:'skills_awareness'},
    {name:"Skills and Strengths", id:196, post:'skills_awareness'},
		{name:"Supports and Environment", id:197, post:'skills_awareness'}
		]
  });




