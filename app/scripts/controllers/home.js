'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('HomeCtrl', function ($scope, Pound) {

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

  	$scope.dailyCheckInCompleteToday = function(){

      var collection                 = Pound.find('dailyCheckIn');
      var mostRecentResponse         = collection[collection.length-1] || 0;
      var mostRecentResponseDateTime = new Date(Date.parse(mostRecentResponse.created_at));
      var differenceInDays           = parseInt((mostRecentResponseDateTime - new Date())/(24*3600*1000))

      if (differenceInDays < 1){
        return true
      } else {
        return false
      }

    };

  	$scope.weeklyCheckInCompleteThisWeek = function(){

      var collection = Pound.find('weeklyCheckIn');
      var mostRecentResponse         = collection[collection.length-1] || 0;
      var mostRecentResponseDateTime = new Date(Date.parse(mostRecentResponse.created_at));
      var differenceInDays           = parseInt((mostRecentResponseDateTime - new Date())/(24*3600*1000))

      if (differenceInDays < 7){
        return true
      } else {
        return false
      }
      
    };

    $scope.greeting = possibleGreetings[Math.floor(Math.random()*possibleGreetings.length)];

    $(".modal-backdrop").remove();

  });
