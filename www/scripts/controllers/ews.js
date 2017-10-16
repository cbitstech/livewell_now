'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('EwsCtrl', function ($scope,$location,UserData,UserDetails,Guid, Database) {
        $scope.pageTitle = "Weekly Check In";

        $scope.ews = UserData.query('ews');
        
        $scope.onClick = function() {
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
				} 
				else {
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

					var dbObject = {
						created: Date.now(),
						sessionID: sessionID,
						sleep: false,
						more_active: false,
						more_talkative: false,
						more_social: false,
						more_irritable: false,
						more_energy: false,
						more_self_esteem: false,
						racing_thoughts: false,
						none: false,
						count: 0
					};
					
					var warningCount = 0;

					for (var i = 0; i < responses.length; i++) {
						switch (responses[i]['value']) {
							case "Sleep disturbance":
								dbObject['sleep'] = true;
								warningCount += 1;
								break;
							case "More active than usual":
								dbObject['more_active'] = true;
								warningCount += 1;
								break;
							case "More talkative than usual":
								dbObject['more_talkative'] = true;
								warningCount += 1;
								break;
							case "More social than usual":
								dbObject['more_social'] = true;
								warningCount += 1;
								break;
							case "More irritable or agitated than usual":
								dbObject['more_irritable'] = true;
								warningCount += 1;
								break;
							case "Increased energy":
								dbObject['more_energy'] = true;
								warningCount += 1;
								break;
							case "Increased self-esteem":
								dbObject['more_self_esteem'] = true;
								warningCount += 1;
								break;
							case "Racing thoughts":
								dbObject['racing_thoughts'] = true;
								warningCount += 1;
								break;
							case "None":
								dbObject['none'] = true;
								break;
						}
					}
					
					dbObject['warning_count'] = warningCount;

					Database.insert('ews_anxious', dbObject);

					$location.path('/ews2');            
				}
            } else {
                alert('Please choose at least one answer to continue. Select "None" if no other answer applies.');
            }
        };
});
