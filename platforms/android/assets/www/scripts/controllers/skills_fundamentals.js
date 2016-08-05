'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SkillsFundamentalsCtrl', function ($scope) {

  	$scope.pageTitle = "Making Changes";

    $scope.mainLinks = [
    {name:"Get Prepared", id:190, post:'skills_fundamentals'},
		{name:"Set Goal", id:193, post:'skills_fundamentals'},
		{name:"Develop Plan",id:191,post:'skills_fundamentals'},
	{name:"Monitor Behavior", id:192, post:'skills_fundamentals'},
		{name:"Evaluate Performance",id:195,post:'skills_fundamentals'}
		];
  });
