'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsLifestyleCtrl
 * @description
 * # SkillsLifestyleCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SkillsLifestyleCtrl', function ($scope) {
  	$scope.pageTitle = "Lifestyle";

    $scope.mainLinks = [
    {name:"Sleep", id:543, post:'skills_lifestyle'},
    {name:"Medications", id:544, post:'skills_lifestyle'},
    {name:"Abstinence", id:545, post:'skills_lifestyle'},
    {name:"Routine", id:546, post:'skills_lifestyle'},    
  	{name:"Tranquility", id:547, post:'skills_lifestyle'},
  	{name:"Socialization", id:562, post:'skills_lifestyle'}
	];
  });
