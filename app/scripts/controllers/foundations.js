'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:FoundationsCtrl
 * @description
 * # FoundationsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('FoundationsCtrl', function ($scope) {

  	$scope.pageTitle = "Foundations";

    $scope.mainLinks = [
    {name:"Overview", id:162},
		{name:"Basic Facts ", id:183},
		{name:"Medications", id:184},
		{name:"Lifestyle Skills", id:185},
		{name:"Coping Skills", id:186},
		{name:"Team", id:187},
		{name:"Awareness", id:188},
		{name:"Action", id:189}]
  });
