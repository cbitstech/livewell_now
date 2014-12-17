'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyCheckInCtrl
 * @description
 * # DailyCheckInCtrl
 * Controller of the livewellApp
 */
 angular.module('livewellApp')
 .controller('DailyCheckInCtrl', function ($scope, $location, $routeParams) {
 	$scope.pageTitle = 'Daily Check In';


 	$scope.responses = [
 	{order:1,response:'-4', label:'-4',tailoredMessage:'some message'},
 	{order:2,response:'-3', label:'-3',tailoredMessage:'some message'},
 	{order:3,response:'-2', label:'-2',tailoredMessage:'some message'},
 	{order:4,response:'-1', label:'-1',tailoredMessage:'some message'},
 	{order:5,response:'0', label:'0',tailoredMessage:'some message'},
 	{order:6,response:'1', label:'+1',tailoredMessage:'some message'},
 	{order:7,response:'2', label:'+2',tailoredMessage:'some message'},
 	{order:8,response:'3', label:'+3',tailoredMessage:'some message'},
 	{order:9,response:'4', label:'+4',tailoredMessage:'some message'}
 	];

 	$scope.saveCheckIn = function(){

 		$location.path('/daily_review/' + $routeParams.id);

 	}

 });
