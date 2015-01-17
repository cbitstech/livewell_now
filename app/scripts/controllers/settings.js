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


    $scope.savePromptSchedule = function(){

        $("form").append('<div class="alert alert-success">Your prompt times have been updated.</div>')

    };




      });
