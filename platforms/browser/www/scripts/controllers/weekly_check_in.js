'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:WeeklyCheckInCtrl
 * @description
 * # WeeklyCheckInCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('WeeklyCheckInCtrl', function ($scope, $location, $routeParams, Questions, Guid, UserDetails, Pound) {


    $scope.pageTitle = 'Weekly Check In';

    var phq_questions = Questions.query('phq9');
    var amrs_questions = Questions.query('amrs');

    //combine questions into one group for the page
    $scope.questionGroups = [phq_questions,amrs_questions];

    //allows you to pass a question index url param into the question group directive
    $scope.questionIndex = parseInt($routeParams.questionIndex)-1 || 0;

    $scope.skippable = false;

    //overrides questiongroup default submit action to send data to PR
    $scope.submit = function(){

    		var _SAVE_LOCATION = 'livewell_survey_data';

            $scope.responseArray[$scope.currentIndex] = $('form').serializeArray()[0]; 

    		var responses = _.flatten($scope.responseArray);

            var sessionID = Guid.create();



    		_.each(responses, function(el){

    			var payload = {
    				userId: UserDetails.find,
    				survey: $scope.pageTitle,
    				questionDataLabel: el.name,
    				questionValue: el.value,
    				sessionGUID: sessionID,
    				savedAt: new Date()
    			};

    			(new PurpleRobot()).emitReading(_SAVE_LOCATION,payload).execute();
    			console.log(payload);

    		});

            var responsePayload = {
                sessionID   : sessionID,
                responses   : responses
            };

            Pound.add('weeklyCheckIn',responsePayload);

            var lWR = responses;
            var phq8Sum = parseInt(lWR[0].value) + parseInt(lWR[1].value) + parseInt(lWR[2].value) + parseInt(lWR[3].value) + parseInt(lWR[4].value) + parseInt(lWR[5].value) + parseInt(lWR[6].value) + parseInt(lWR[7].value);
            var amrsSum = parseInt(lWR[8].value) + parseInt(lWR[9].value) + parseInt(lWR[10].value) + parseInt(lWR[11].value) + parseInt(lWR[12].value);

            if (amrsSum >= 10){
            (new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', message:'Altman Mania Rating Scale >= 10'}).execute();
            }
            if (amrsSum >= 16){
            (new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'psychiatrist',  message:'Altman Mania Rating Scale >= 16'}).execute();
            }
            if (phq8Sum >= 15){
            (new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'coach', message:'PHQ8 >= 15'}).execute();
            }
            if (phq8Sum >= 20){
            (new PurpleRobot()).emitReading('livewell_clinicalreachout',{call:'psychiatrist', message:'PHQ8 >= 20'}).execute();
            }

    		$location.path("/ews");

    }

  });
