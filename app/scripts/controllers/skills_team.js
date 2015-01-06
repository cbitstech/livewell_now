'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsTeamCtrl
 * @description
 * # SkillsTeamCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SkillsTeamCtrl', function ($scope) {
  	$scope.pageTitle = "Team";

    $scope.mainLinks = [
    {name:"Duality", id:553, post:'skills_team'},
    {name:"Humilty", id:554, post:'skills_team'},
    {name:"Obligation", id:555, post:'skills_team'},     
	  {name:"Sacrifice", id:556, post:'skills_team'},
		{name:"Asking for Help", id:557, post:'skills_team'},
    {name:"Giving Back", id:558, post:'skills_team'},
    {name:"Doctor Checklist", id:559, post:'skills_team'},     
	  {name:"Support Checklist", id:560, post:'skills_team'},
	   {name:"Hospital Checklist", id:561, post:'skills_team'}
		];
  
  });
