'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:WellnessCtrl
 * @description
 * # WellnessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('WellnessCtrl', function ($scope,$routeParams) {
    $scope.pageTitle = 'Wellness Plan';

    $scope.section = $routeParams.section || "";
  
    $scope.showResources = function(){
        $scope.riskVisible = false;
        $scope.awarenessVisible = false;
        $scope.resourcesVisible = true;
        $('button#awareness').removeClass('btn-active');
        $('button#risk').removeClass('btn-active');
        $('button#resources').addClass('btn-active');
    }

    $scope.showRisk = function(){
        $scope.awarenessVisible = false;
        $scope.resourcesVisible = false;
        $scope.riskVisible = true;
        $('button#awareness').removeClass('btn-active');
        $('button#risk').addClass('btn-active');
        $('button#resources').removeClass('btn-active');
    }

    $scope.showAwareness = function(){
        $scope.resourcesVisible = false;
        $scope.riskVisible = false;
        $scope.awarenessVisible = true;
        $('button#resources').removeClass('btn-active');
        $('button#risk').removeClass('btn-active');
        $('button#awareness').addClass('btn-active');

    }


    switch($scope.section) {
    case "resources":
        $scope.showResources();
        break;
    case "awareness":
        $scope.showAwareness();
        break;
    case "risk":
        $scope.showRisk();
        break;  
    default:
    $scope.resourcesVisible = false;
    $scope.riskVisible = false;
    $scope.awarenessVisible = false;
    }




  });
