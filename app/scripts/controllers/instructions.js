'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:InstructionsCtrl
 * @description
 * # InstructionsCtrl
 * Controller of the livewellApp
 */
	angular.module('livewellApp')
	  .controller('InstructionsCtrl', function ($scope, StaticContent) {
	$scope.pageTitle = "Instructions";

    $scope.mainLinks = [
           {id:198,name:"Introduction"},
            {id:199,name:"Schedule"},
            {id:201,name:"Settings"},
            {id:202,name:"Coach"},
            {id:203,name:"Psychiatrist"},
            {id:204,name:"Foundations"},
            {id:205,name:"Daily Check In"},
            {id:372,name:"Weekly Check In"},
            {id:369,name:"Daily Review"},
            {id:370,name:"Charts"},
            {id:371,name:"Wellness Plan"}]


	  });
