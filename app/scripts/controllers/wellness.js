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
    }

    $scope.showRisk = function(){
        $scope.awarenessVisible = false;
        $scope.resourcesVisible = false;
        $scope.riskVisible = true;
    }

    $scope.showAwareness = function(){
        $scope.resourcesVisible = false;
        $scope.riskVisible = false;
        $scope.awarenessVisible = true;

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
