'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.pageTitle = 'Settings';

     	$scope.dailyHourRange = [
			 	{label:'12 AM',value:'0000'},
			 	{label:'1 AM',value:'0100'},
			 	{label:'2 AM',value:'0200'},
			 	{label:'3 AM',value:'0300'},
			 	{label:'4 AM',value:'0400'},
			 	{label:'5 AM',value:'0500'},
			 	{label:'6 AM',value:'0600'},
			 	{label:'7 AM',value:'0700'},
			 	{label:'8 AM',value:'0800'},
			 	{label:'9 AM',value:'0900'},
			 	{label:'10 AM',value:'1000'},
			 	{label:'11 AM',value:'1100'},
			 	{label:'12 PM',value:'1200'},
			 	{label:'1 PM',value:'1300'},
			 	{label:'2 PM',value:'1400'},
			 	{label:'3 PM',value:'1500'},
			 	{label:'4 PM',value:'1600'},
			 	{label:'5 PM',value:'1700'},
			 	{label:'6 PM',value:'1800'},
			 	{label:'7 PM',value:'1900'},
			 	{label:'8 PM',value:'2000'},
			 	{label:'9 PM',value:'2100'},
			 	{label:'10 PM',value:'2200'},
			 	{label:'11 PM',value:'2300'},
			 	];



      });
