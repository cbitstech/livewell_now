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
        
        $scope.onClick=function() {
            var responses = $('form').serializeArray();
            
            if (responses.length > 0) {
            	var hasNone = false;
            	
            	for (var i = 0; i < responses.length; i++) {
            		if (responses[i]['value'] == 'None') {
            			hasNone = true;
            		}
            	}

				if (hasNone && responses.length > 1) {
					alert('"None" cannot be selected with other options.');
				} else {
					var el = JSON.stringify(responses || {name:'ews', value:null}); 

					var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);

					var sessionID = Guid.create();

					var payload = {
						userId: UserDetails.find,
						survey: 'ews',
						questionDataLabel: 'ews',
						questionValue: el,
						sessionGUID: sessionID,
						savedAt: new Date(),
						clinicalStatus: clinicalStatus 
					};

					console.log('EWS RESPONSE: ' + JSON.stringify(payload));

					(new PurpleRobot()).emitReading('livewell_survey_data',payload).execute();

					$location.path('/ews2');            
				}
            } else {
                alert('Please choose at least one answer to continue. Select "None" if no other answer applies.');
            }
        };
});
