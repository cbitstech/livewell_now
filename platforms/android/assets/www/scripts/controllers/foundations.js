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
    {name:"Overview", id:162, post:'foundations', type:'lesson_player'},
		{name:"Basic Facts ", id:183, post:'foundations', type:'lesson_player'},
		{name:"Medications", id:184, post:'foundations', type:'lesson_player'},
		{name:"Lifestyle Skills", id:185, post:'foundations', type:'lesson_player'},
		{name:"Coping Skills", id:186, post:'foundations', type:'lesson_player'},
		{name:"Team", id:187, post:'foundations', type:'lesson_player'},
		{name:"Awareness", id:188, post:'foundations', type:'lesson_player'},
		{name:"Action", id:189, post:'foundations', type:'lesson_player'},
		{name:"Conclusion", id:250, post:'foundations', type:'lesson_player'}]

  });
