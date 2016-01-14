'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:ExitCtrl
 * @description
 * # ExitCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('ExitCtrl', function ($scope) {
    
    navigator.app.exitApp();

  });
