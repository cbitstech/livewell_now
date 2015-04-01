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
    {name:"Self-Assessment", id:194, post:'skills_awareness'},
    {name:"Psychiatrist Feedback", id:196, post:'skills_awareness'},
		{name:"Support Feedback", id:197, post:'skills_awareness'}
		]
  });
