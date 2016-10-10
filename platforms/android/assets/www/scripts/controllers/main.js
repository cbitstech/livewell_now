'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('MainCtrl', function ($scope, UserDetails) {

  	$scope.pageTitle = 'Main Menu';

    $scope.mainLinks = [
    {name:"Foundations", href:"foundations"},
    {name:"Toolbox", href:"skills"},
    {name:"Wellness Plan", href:"wellness/resources"},
    ];

    // $scope.showLogin = function(){

    //   if (UserDetails.find.id == null){
    //     return true
    //   }
    //   else {
    //     return false
    //   }

    // }

  });
