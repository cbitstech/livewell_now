'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:AwarenessCtrl
 * @description
 * # AwarenessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('AwarenessCtrl', function ($scope,UserData) {

    //awareness variables
    $scope.awareness = UserData.query('awareness');
    $scope.intervention_anchors =  UserData.query('anchors');
    $scope.plan =  UserData.query('plan');
    
    $scope.showAnchors = false;
    $scope.showAction = false;
    $scope.showPlan = true;

    $scope.loadAnchors = function(){
    $scope.showAnchors = true;
    $scope.showAction = false;
    $scope.showPlan = false;
    }

 		$scope.loadAction = function(){
    $scope.showAnchors = false;
    $scope.showAction = true;
    $scope.showPlan = false;
    }
  
    $scope.loadPlan = function(){
    $scope.showAnchors = false;
    $scope.showAction = false;
    $scope.showPlan = true;
    }
     

  });
