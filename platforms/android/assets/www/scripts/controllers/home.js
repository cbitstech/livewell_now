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
      $scope.startDate = new Date().getDay()
  		localStorage['appConfigured'] = true;
  		window.location.href = "";
  	}

  	$scope.dailyCheckInCompleteToday = function(){

      var collection                 = Pound.find('dailyCheckIn');
      var mostRecentResponse         = collection[collection.length-1] || 0;
      var mostRecentResponseDateTime = new Date(Date.parse(mostRecentResponse.created_at));


      function dropTime(dt){

        var datetime = dt;

        datetime.setHours(0)
        datetime.setMinutes(0);
        datetime.setSeconds(0);
        datetime.setMilliseconds(0);

        return datetime.toString()

      }

      if (dropTime(mostRecentResponseDateTime) == dropTime(new Date()) ){
        return true
      } else {
        return false
      }

    };

  	$scope.weeklyCheckInCompleteThisWeek = function(){

      var collection = Pound.find('weeklyCheckIn');
      var mostRecentResponse         = collection[collection.length-1] || 0;
      var mostRecentResponseDateTime = new Date(Date.parse(mostRecentResponse.created_at));

      var now = moment(new Date());
      var lastSundayMorning = moment(new Date()).subtract(new Date().getDay(),'d').set({hour:0,minute:0,second:0,millisecond:0});
      
      var validResponse = moment(mostRecentResponseDateTime).isAfter(lastSundayMorning) && moment(mostRecentResponseDateTime).isBefore(now);

      if (collection.length == 0){
        return false
      }
      else if (validResponse){
        return true
      } else {
        return false
      }
      
    };

    $scope.dailyReviewCompleteToday = function(){
      var dailyReviewComplete = false;
      var thisMorning = moment(new Date()).set({hour:0,minute:0,second:0,millisecond:0});

      var collection = Pound.find('dailyReviewStarted');
      var mostRecentResponse         = collection[collection.length-1] || 0;
      var mostRecentResponseDateTime = new Date(Date.parse(mostRecentResponse.created_at));

      if(moment(mostRecentResponseDateTime).isAfter(thisMorning)){

        dailyReviewComplete = true;
      }

      return dailyReviewComplete


    }

    $scope.lastDailyCheckInWasEmergency = function(){
      var collection = Pound.find('dailyCheckIn');
      var mostRecentResponse         = collection[collection.length-1] || 0;

      if(mostRecentResponse.wellness != '-4' && mostRecentResponse.wellness != '4'){
        return false
      }
      else{
        return true
      }
    }

    $scope.greeting = possibleGreetings[Math.floor(Math.random()*possibleGreetings.length)];

    $(".modal-backdrop").remove();

  });