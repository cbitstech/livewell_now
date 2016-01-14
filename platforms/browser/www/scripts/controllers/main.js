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
    {name:"Skills", href:"skills"},
    {name:"Wellness Plan", href:"wellness/resources"},
    {name:"Instructions", href:"instructions"}
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
