'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:PersonalsnapshotCtrl
 * @description
 * # PersonalsnapshotCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('PersonalsnapshotCtrl', function ($scope, UserData) {
			
  	// 	var sleepRoutineRanges = {};

			// sleepRoutineRanges.MoreSevere      = 12;
			// sleepRoutineRanges.More            = 9;
			// sleepRoutineRanges.Less            = 7;
			// sleepRoutineRanges.LessSevere      = 4;

			// sleepRoutineRanges.BedTimeStrt_MT  = '2300';
			// sleepRoutineRanges.BedtimeStop_MT  = '0100';

			// sleepRoutineRanges.RiseTimeStrt_MT = '0630';
			// sleepRoutineRanges.RiseTimeStop_MT = '0830';

			$scope.sleepRoutineRanges = UserData.query('sleepRoutineRanges');
			$scope.currentClinicalStatusCode = UserData.query('clinicalStatus').currentCode;

  });
