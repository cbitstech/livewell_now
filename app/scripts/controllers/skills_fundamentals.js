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

  	$scope.pageTitle = "Fundamentals";

    $scope.mainLinks = [
    {name:"Prepare", id:537, post:'skills_fundamentals'},
		{name:"Plan", id:538, post:'skills_fundamentals'},
		{name:"Perform",id:539,post:'skills_fundamentals'}
		];
  });
