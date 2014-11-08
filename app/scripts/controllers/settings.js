'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.pageTitle = 'Settings';

     $scope.checkinPrompt = null;
    $scope.reviewPrompt = null;


    $scope.checkinPromptSchedule = function(){
    	alert('Daily Check-In set for ' + $scope.checkinPrompt);
    	//TODO Schedule a check prompt in 
    	//Set an onload override to go to checkin
    };


    $scope.reviewPromptSchedule = function(){
    	alert('Daily Review set for ' + $scope.reviewPrompt);
    	//TODO Schedule a check prompt in 
    	//Set an onload override to go to checkin
    };


      });
