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
    {name:"Overview", id:162, post:'foundations'},
		{name:"Basic Facts ", id:183, post:'foundations'},
		{name:"Medications", id:184, post:'foundations'},
		{name:"Lifestyle Skills", id:185, post:'foundations'},
		{name:"Coping Skills", id:186, post:'foundations'},
		{name:"Team", id:187, post:'foundations'},
		{name:"Awareness", id:188, post:'foundations'},
		{name:"Action", id:189, post:'foundations'}]
  });
