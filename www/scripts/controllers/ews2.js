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
            var responses = $('form').serializeArray();

            console.log('EWS RESPONSE LENGTH: ' + responses.length);

            if (responses.length > 0) {
                var el = JSON.stringify(responses || {name:'ews', value:null}); 
                var sessionID = Guid.create();

				var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

                var payload = {
                    userId: UserDetails.find,
                    survey: 'ews2',
                    questionDataLabel: 'ews2',
                    questionValue: el,
                    sessionGUID: sessionID,
                    savedAt: new Date(),
					clinicalStatus: clinicalStatus 
                };

                (new PurpleRobot()).emitReading('livewell_survey_data',payload).execute();
                console.log(JSON.stringify(payload));

                $location.path('/');            
            } else {
                alert('Please choose at least one answer to continue. Select "None" if no other answer applies.');
            }
        }
});
