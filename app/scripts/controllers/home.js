'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('HomeCtrl', function ($scope) {

  	var possibleGreetings = ['Welcome back!','Hello!','Greetings!','Good to see you!'];

  	var requiredUserCollections = [];

  	$scope.appConfigured = localStorage['appConfigured'];

  	$scope.verifyUserContent = function(){

  		$scope.errorVerifyUserColor = 'green';
  	}

  	$scope.startTrial = function(){
  		localStorage['appConfigured'] = true;
  		window.location.href = "";
  	}

  	$scope.dailyCheckInComplete = false;
  	$scope.weeklyCheckInComplete = false;
  	$scope.showDailyReview = true;
    $scope.greeting = possibleGreetings[Math.floor(Math.random()*possibleGreetings.length)];;

  });
