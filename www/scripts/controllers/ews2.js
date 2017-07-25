'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('Ews2Ctrl', function ($scope,$location,UserData,UserDetails,Guid, Database) {
        $scope.pageTitle = "Weekly Check In";
        $scope.ews2 = UserData.query('ews2');

        $scope.onClick=function(){
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
			
					var dbObject = {
						created: Date.now(),
						sessionID: sessionID,
						anxious: false,
						less_energy: false,
						concentration: false,
						less_interest: false,
						negative_thinking: false,
						withdrawn: false,
						sleep: false,
						guilt: false,
						none: false,
						warning_count: 0
					};
					
					var warningCount = 0;

					for (var i = 0; i < responses.length; i++) {
						switch (responses[i]['value']) {
							case "Anxious or sad mood":
								dbObject['anxious'] = true;
								warningCount += 1;
								break;
							case "Less energy than usual":
								dbObject['less_energy'] = true;
								warningCount += 1;
								break;
							case "Problems concentrating":
								dbObject['concentration'] = true;
								warningCount += 1;
								break;
							case "Less interest than usual":
								dbObject['less_interest'] = true;
								warningCount += 1;
								break;
							case "More Negative thinking":
								dbObject['negative_thinking'] = true;
								warningCount += 1;
								break;
							case "Withdrawn":
								dbObject['withdrawn'] = true;
								warningCount += 1;
								break;
							case "Sleep disturbance":
								dbObject['sleep'] = true;
								warningCount += 1;
								break;
							case "Guilt":
								dbObject['guilt'] = true;
								warningCount += 1;
								break;
							case "None":
								dbObject['none'] = true;
								break;
						}
					}
					
					dbObject['warning_count'] = warningCount;

					Database.insert('ews_depression', dbObject);					  
				}
            } else {
                alert('Please choose at least one answer to continue. Select "None" if no other answer applies.');
            }
        }
});
