'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyCheckInCtrl
 * @description
 * # DailyCheckInCtrl
 * Controller of the livewellApp
 */
 angular.module('livewellApp')
 .controller('DailyCheckInCtrl', function ($scope, $location, $routeParams, $filter, Pound, Guid, UserData) {
 	$scope.pageTitle = 'Daily Check In';

 	$scope.dailyCheckIn = {
 		gotUp:'',
 		toBed:'',
 		wellness:'',
 		medications:'',
 		startTime: new Date()
 	};

 	$scope.emergency = false;

 	// $scope.doctorPhone = $filter('filter')(UserData.query('team'),{role:'Psychiatrist'});

 	$scope.responses = [
 	{order:1,response:'-4', label:'-4',tailoredMessage:'some message',warningMessage:'You rated yourself as being in a crisis with a -4, if this is correct, close and press continue.'},
 	{order:2,response:'-3', label:'-3',tailoredMessage:'some message'},
 	{order:3,response:'-2', label:'-2',tailoredMessage:'some message'},
 	{order:4,response:'-1', label:'-1',tailoredMessage:'some message'},
 	{order:5,response:'0', label:'0',tailoredMessage:'some message'},
 	{order:6,response:'1', label:'+1',tailoredMessage:'some message'},
 	{order:7,response:'2', label:'+2',tailoredMessage:'some message'},
 	{order:8,response:'3', label:'+3',tailoredMessage:'some message'},
 	{order:9,response:'4', label:'+4',tailoredMessage:'some message',warningMessage:'You rated yourself as being in a crisis with a +4, if this is correct, close and press continue.'}
 	];

 	$scope.times = [ 	
 	{value:"0000", label:"12:00AM"},
	{value:"0030", label:"12:30AM"},
	{value:"0100", label:"1:00AM"},
	{value:"0130", label:"1:30AM"},
	{value:"0200", label:"2:00AM"},
	{value:"0230", label:"2:30AM"},
	{value:"0300", label:"3:00AM"},
	{value:"0330", label:"3:30AM"},
	{value:"0400", label:"4:00AM"},
	{value:"0430", label:"4:30AM"},
	{value:"0500", label:"5:00AM"},
	{value:"0530", label:"5:30AM"},
	{value:"0600", label:"6:00AM"},
	{value:"0630", label:"6:30AM"},
	{value:"0700", label:"7:00AM"},
	{value:"0730", label:"7:30AM"},
	{value:"0800", label:"8:00AM"},
	{value:"0830", label:"8:30AM"},
	{value:"0900", label:"9:00AM"},
	{value:"0930", label:"9:30AM"},
	{value:"1000", label:"10:00AM"},
	{value:"1030", label:"10:30AM"},
	{value:"1100", label:"11:00AM"},
	{value:"1130", label:"11:30AM"},
	{value:"1200", label:"12:00PM"},
	{value:"1230", label:"12:30PM"},
	{value:"1300", label:"1:00PM"},
	{value:"1330", label:"1:30PM"},
	{value:"1400", label:"2:00PM"},
	{value:"1430", label:"2:30PM"},
	{value:"1500", label:"3:00PM"},
	{value:"1530", label:"3:30PM"},
	{value:"1600", label:"4:00PM"},
	{value:"1630", label:"4:30PM"},
	{value:"1700", label:"5:00PM"},
	{value:"1730", label:"5:30PM"},
	{value:"1800", label:"6:00PM"},
	{value:"1830", label:"6:30PM"},
	{value:"1900", label:"7:00PM"},
	{value:"1930", label:"7:30PM"},
	{value:"2000", label:"8:00PM"},
	{value:"2030", label:"8:30PM"},
	{value:"2100", label:"9:00PM"},
	{value:"2130", label:"9:30PM"},
	{value:"2200", label:"10:00PM"},
	{value:"2230", label:"10:30PM"},
	{value:"2300", label:"11:00PM"},
	{value:"2330", label:"11:30PM"}];

 	$scope.saveCheckIn = function(){

 	 var allAnswersFinished = $scope.dailyCheckIn.gotUp != '' & $scope.dailyCheckIn.toBed != '' & $scope.dailyCheckIn.medications != '' & $scope.dailyCheckIn.wellness != '';

 		if(allAnswersFinished){
 		$scope.dailyCheckIn.endTime = new Date();
 		if($scope.dailyCheckIn.wellness == 4 || $scope.dailyCheckIn.wellness == -4){
 			$scope.emergency = true;
 		}
 		Pound.add('dailyCheckIn',$scope.dailyCheckIn);
 		$scope.nextId = $routeParams.id;
 	
 	  var sessionID = Guid.create();

		(new PurpleRobot()).emitReading('livewell_survey_data',{survey:'daily',sessionGUID: sessionID,startTime:$scope.dailyCheckIn.startTime,questionDataLabel:'toBed',questionValue:$scope.dailyCheckIn.toBed}).execute();
		(new PurpleRobot()).emitReading('livewell_survey_data',{survey:'daily',sessionGUID: sessionID,startTime:$scope.dailyCheckIn.startTime,questionDataLabel:'gotUp', questionValue:$scope.dailyCheckIn.gotUp}).execute();
		(new PurpleRobot()).emitReading('livewell_survey_data',{survey:'daily',sessionGUID: sessionID,startTime:$scope.dailyCheckIn.startTime,questionDataLabel:'wellness',questionValue:$scope.dailyCheckIn.wellness}).execute();
		(new PurpleRobot()).emitReading('livewell_survey_data',{survey:'daily',sessionGUID: sessionID,startTime:$scope.dailyCheckIn.startTime,questionDataLabel:'medications',questionValue:$scope.dailyCheckIn.medications}).execute();

 		$("#continue").modal();
 		}
 		else{
 			$("#warning").modal();
 			$scope.selectedWarningMessage = 'You must respond to all questions on this page!';
 		}
 	}

 	$scope.highlight = function(id,response){

 		$('label').removeClass('highlight');
 		$(id).addClass('highlight');
 		$scope.dailyCheckIn.wellness = response;

 	}

 	$scope.notifyCareGroup = function(){

 		//notify Coach "role = Coach"
		//"LiveWell Subject {{Patient ID}}" Has Issued a Crisis Daily Check In

 		//notify Psychiatrist "role = Psychiatrist"
		//"LiveWell Subject {{Patient ID}}" Has Issued a Crisis Daily Check In

 	}


 	$scope.warning = function(warningMessage){

 		if (warningMessage.length > 0){
 			$("#warning").modal();
 			$scope.selectedWarningMessage = warningMessage;
 		}


 	}

 });
