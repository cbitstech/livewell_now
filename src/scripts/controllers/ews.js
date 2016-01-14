'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('EwsCtrl', function ($scope,$location,UserData,UserDetails,Guid) {

  	$scope.pageTitle = "Weekly Check In";

    $scope.ews = UserData.query('ews');

		$scope.onClick=function(){

						var el = JSON.stringify($('form').serializeArray()) || {name:'ews', value:null}; ; 
						var sessionID = Guid.create();

			      var payload = {
                  userId: UserDetails.find,
                  survey: 'ews',
                  questionDataLabel: 'ews',
                  questionValue: el,
                  sessionGUID: sessionID,
                  savedAt: new Date()
            };

            (new PurpleRobot()).emitReading('livewell_survey_data',payload).execute();

						$location.path('/ews2');      		


			}

  });
