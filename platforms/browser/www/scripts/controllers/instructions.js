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
           {id:198,name:"Introduction", post:"instructions"},
            {id:201,name:"Settings", post:"instructions"},
            {id:199,name:"Toolbox", post:"instructions"},
            {id:202,name:"Coach", post:"instructions"},
            {id:203,name:"Psychiatrist", post:"instructions"},
            {id:204,name:"Foundations", post:"instructions"},
            {id:205,name:"Daily Check In", post:"instructions"},
            {id:372,name:"Weekly Check In", post:"instructions"},
            {id:369,name:"Daily Review", post:"instructions"},
            {id:371,name:"Wellness Plan", post:"instructions"},
            {id:370,name:"Charts", post:"instructions"}
            ]


	  });
