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
    {name:"Overview", href:""},
		{name:"Basic Facts ", href:""},
		{name:"Medications", href:""},
		{name:"Coping Skills", href:""},
		{name:"Team", href:""},
		{name:"Awareness", href:""},
		{name:"Action", href:""}]
  });
