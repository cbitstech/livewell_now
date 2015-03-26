'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsCtrl
 * @description
 * # ChartsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('ChartsCtrl', function ($scope) {
    $scope.pageTitle = 'My Charts';

    $scope.pageCollection = [
    	{label:"Dashboard",href:"#/chartsDashboard"},
    	{label:"Medication",href:"#/chartsMedication"},
    	{label:"Sleep",href:"#/chartsSleep"},
    	{label:"Routine",href:"#/chartsRoutine"},
    	{label:"Activity",href:"#/chartsActivity"},
    ]
  });
