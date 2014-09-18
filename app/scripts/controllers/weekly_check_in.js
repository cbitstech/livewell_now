'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:WeeklyCheckInCtrl
 * @description
 * # WeeklyCheckInCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('WeeklyCheckInCtrl', function ($scope, $location, $routeParams, Questions, Guid, UserDetails) {


    $scope.pageTitle = 'Weekly Check In';

    var phq_questions = Questions.query('phq9');
    var amrs_questions = Questions.query('amrs');

    //combine questions into one group for the page
    $scope.questionGroups = [phq_questions,amrs_questions];

    //allows you to pass a question index url param into the question group directive
    $scope.questionIndex = parseInt($routeParams.questionIndex)-1 || 0;

    //overrides questiongroup default submit action to send data to PR
    $scope.submit = function(){

    		var _SAVE_LOCATION = 'surveys';

    		var responses = $('form').serializeArray();

    		_.each(responses, function(el){


    			var payload = {
    				userId: UserDetails.find,
    				survey: $scope.pageTitle,
    				questionDataLabel: el.name,
    				questionValue: el.value,
    				sessionGUID: Guid.create(),
    				savedAt: new Date()
    			};

    			// (new PurpleRobot()).emitReading(_SAVE_LOCATION,payload).execute();
    			console.log(payload);

    		});

    		alert('Thank you, your results have been saved');
    		$location.path("/");

    }

  });
