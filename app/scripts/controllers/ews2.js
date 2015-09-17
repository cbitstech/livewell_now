'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('Ews2Ctrl', function ($scope,$location,UserData,UserDetails,Guid) {

  	$scope.pageTitle = "Weekly Check In";

    $scope.ews2 = UserData.query('ews2');

		$scope.onClick=function(){
						
	
            var el = JSON.stringify($('form').serializeArray()) || {name:'ews', value:null}; ; 
            var sessionID = Guid.create();

            var payload = {
                  userId: UserDetails.find,
                  survey: 'ews2',
                  questionDataLabel: 'ews2',
                  questionValue: el,
                  sessionGUID: sessionID,
                  savedAt: new Date()
            };

            (new PurpleRobot()).emitReading('livewell_survey_data',payload).execute();
            console.log(payload);

						$location.path('/');      		

		}



  });
