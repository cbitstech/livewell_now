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

    $('.btn-default').removeClass('active');
    $('#load-plan').addClass('active');

    $scope.loadAnchors = function(){
    $scope.showAnchors = true;
    $scope.showAction = false;
    $scope.showPlan = false;
    $('.btn-default').removeClass('active');
    $('#load-anchors').addClass('active');
    }

 	$scope.loadAction = function(){
    $scope.showAnchors = false;
    $scope.showAction = true;
    $scope.showPlan = false;
    $('.btn-default').removeClass('active');
    $('#load-action').addClass('active');
    }
  
    $scope.loadPlan = function(){
    $scope.showAnchors = false;
    $scope.showAction = false;
    $scope.showPlan = true;
    $('.btn-default').removeClass('active');
    $('#load-plan').addClass('active');
    }
     

  });
