'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.pageTitle = 'LiveWell';

    $scope.mainLinks = [
    {name:"Foundations", href:"foundations"},
    {name:"Check Ins", href:"checkins"},
    {name:"Daily Review", href:"daily_review"},
    {name:"Wellness Plan", href:"wellness"},
    {name:"Instructions & Settings", href:"instructions"}
    ];
    
  });
