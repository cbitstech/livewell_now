'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyCheckInCtrl
 * @description
 * # DailyCheckInCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyCheckInCtrl', function($scope, $location, $routeParams, Pound, Guid, Database) {
    $scope.pageTitle = 'Daily Check In';

    $scope.dailyCheckIn = {
        gotUp: '',
        toBed: '',
        wellness: '',
        medications: '',
        startTime: new Date()
    };

    $scope.emergency = false;

    $scope.warningPhoneNumber = null;

    if (_.where(JSON.parse(localStorage.team), { role: 'Psychiatrist' })[0] != undefined) 
    {
        $scope.phoneNumber = _.where(JSON.parse(localStorage.team), {
            role: 'Psychiatrist'
        })[0].phone;
    } else {
        $scope.phoneNumber = '312-503-1886';
    }

    if (_.where(JSON.parse(localStorage.team), { role: 'Coach' })[0] != undefined) {
        $scope.coachNumber = _.where(JSON.parse(localStorage.team), {
            role: 'Coach'
        })[0].phone;
    } else {
        $scope.coachNumber = '312-503-1886';
    }

    $scope.responses = [{
        order: 1,
        callCoach: true,
        response: '-4',
        label: '-4',
        tailoredMessage: 'some message',
        warningMessage: 'You rated yourself as being in a crisis with a -4, if this is correct, close and press submit.'
    }, {
        order: 2,
        callCoach: false,
        response: '-3',
        label: '-3',
        tailoredMessage: 'some message'
    }, {
        order: 3,
        callCoach: false,
        response: '-2',
        label: '-2',
        tailoredMessage: 'some message'
    }, {
        order: 4,
        callCoach: false,
        response: '-1',
        label: '-1',
        tailoredMessage: 'some message'
    }, {
        order: 5,
        callCoach: false,
        response: '0',
        label: '0',
        tailoredMessage: 'some message'
    }, {
        order: 6,
        callCoach: false,
        response: '1',
        label: '+1',
        tailoredMessage: 'some message'
    }, {
        order: 7,
        callCoach: false,
        response: '2',
        label: '+2',
        tailoredMessage: 'some message'
    }, {
        order: 8,
        callCoach: false,
        response: '3',
        label: '+3',
        tailoredMessage: 'some message'
    }, {
        order: 9,
        callCoach: true,
        response: '4',
        label: '+4',
        tailoredMessage: 'some message',
        warningMessage: 'You rated yourself as being in a crisis with a +4, if this is correct, close and press submit.'
    }];

    $scope.times = [{
        value: "0000",
        label: "12:00AM"
    }, {
        value: "0030",
        label: "12:30AM"
    }, {
        value: "0100",
        label: "1:00AM"
    }, {
        value: "0130",
        label: "1:30AM"
    }, {
        value: "0200",
        label: "2:00AM"
    }, {
        value: "0230",
        label: "2:30AM"
    }, {
        value: "0300",
        label: "3:00AM"
    }, {
        value: "0330",
        label: "3:30AM"
    }, {
        value: "0400",
        label: "4:00AM"
    }, {
        value: "0430",
        label: "4:30AM"
    }, {
        value: "0500",
        label: "5:00AM"
    }, {
        value: "0530",
        label: "5:30AM"
    }, {
        value: "0600",
        label: "6:00AM"
    }, {
        value: "0630",
        label: "6:30AM"
    }, {
        value: "0700",
        label: "7:00AM"
    }, {
        value: "0730",
        label: "7:30AM"
    }, {
        value: "0800",
        label: "8:00AM"
    }, {
        value: "0830",
        label: "8:30AM"
    }, {
        value: "0900",
        label: "9:00AM"
    }, {
        value: "0930",
        label: "9:30AM"
    }, {
        value: "1000",
        label: "10:00AM"
    }, {
        value: "1030",
        label: "10:30AM"
    }, {
        value: "1100",
        label: "11:00AM"
    }, {
        value: "1130",
        label: "11:30AM"
    }, {
        value: "1200",
        label: "12:00PM"
    }, {
        value: "1230",
        label: "12:30PM"
    }, {
        value: "1300",
        label: "1:00PM"
    }, {
        value: "1330",
        label: "1:30PM"
    }, {
        value: "1400",
        label: "2:00PM"
    }, {
        value: "1430",
        label: "2:30PM"
    }, {
        value: "1500",
        label: "3:00PM"
    }, {
        value: "1530",
        label: "3:30PM"
    }, {
        value: "1600",
        label: "4:00PM"
    }, {
        value: "1630",
        label: "4:30PM"
    }, {
        value: "1700",
        label: "5:00PM"
    }, {
        value: "1730",
        label: "5:30PM"
    }, {
        value: "1800",
        label: "6:00PM"
    }, {
        value: "1830",
        label: "6:30PM"
    }, {
        value: "1900",
        label: "7:00PM"
    }, {
        value: "1930",
        label: "7:30PM"
    }, {
        value: "2000",
        label: "8:00PM"
    }, {
        value: "2030",
        label: "8:30PM"
    }, {
        value: "2100",
        label: "9:00PM"
    }, {
        value: "2130",
        label: "9:30PM"
    }, {
        value: "2200",
        label: "10:00PM"
    }, {
        value: "2230",
        label: "10:30PM"
    }, {
        value: "2300",
        label: "11:00PM"
    }, {
        value: "2330",
        label: "11:30PM"
    }];

    $scope.hours = [{
        value: "0",
        label: "0 hrs"
    }, {
        value: "0.5",
        label: "0.5 hrs"
    }, {
        value: "1",
        label: "1 hrs"
    }, {
        value: "1.5",
        label: "1.5 hrs"
    }, {
        value: "2",
        label: "2 hrs"
    }, {
        value: "2.5",
        label: "2.5 hrs"
    }, {
        value: "3",
        label: "3 hrs"
    }, {
        value: "3.5",
        label: "3.5 hrs"
    }, {
        value: "4",
        label: "4 hrs"
    }, {
        value: "4.5",
        label: "4.5 hrs"
    }, {
        value: "5",
        label: "5 hrs"
    }, {
        value: "5.5",
        label: "5.5 hrs"
    }, {
        value: "6",
        label: "6 hrs"
    }, {
        value: "6.5",
        label: "6.5 hrs"
    }, {
        value: "7",
        label: "7 hrs"
    }, {
        value: "7.5",
        label: "7.5 hrs"
    }, {
        value: "8",
        label: "8 hrs"
    }, {
        value: "8.5",
        label: "8.5 hrs"
    }, {
        value: "9",
        label: "9 hrs"
    }, {
        value: "9.5",
        label: "9.5 hrs"
    }, {
        value: "10",
        label: "10 hrs"
    }, {
        value: "10.5",
        label: "10.5 hrs"
    }, {
        value: "11",
        label: "11 hrs"
    }, {
        value: "11.5",
        label: "11.5 hrs"
    }, {
        value: "12",
        label: "12 hrs"
    }, {
        value: "12.5",
        label: "12.5 hrs"
    }, {
        value: "13",
        label: "13 hrs"
    }, {
        value: "13.5",
        label: "13.5 hrs"
    }, {
        value: "14",
        label: "14 hrs"
    }, {
        value: "14.5",
        label: "14.5 hrs"
    }, {
        value: "15",
        label: "15 hrs"
    }, {
        value: "15.5",
        label: "15.5 hrs"
    }, {
        value: "16",
        label: "16 hrs"
    }, {
        value: "16.5",
        label: "16.5 hrs"
    }, {
        value: "17",
        label: "17 hrs"
    }, {
        value: "17.5",
        label: "17.5 hrs"
    }, {
        value: "18",
        label: "18 hrs"
    }, {
        value: "18.5",
        label: "18.5 hrs"
    }, {
        value: "19",
        label: "19 hrs"
    }, {
        value: "19.5",
        label: "19.5 hrs"
    }, {
        value: "20",
        label: "20 hrs"
    }, {
        value: "20.5",
        label: "20.5 hrs"
    }, {
        value: "21",
        label: "21 hrs"
    }, {
        value: "21.5",
        label: "21.5 hrs"
    }, {
        value: "22",
        label: "22 hrs"
    }, {
        value: "22.5",
        label: "22.5 hrs"
    }, {
        value: "23",
        label: "23 hrs"
    }, {
        value: "23.5",
        label: "23.5 hrs"
    }, {
        value: "24",
        label: "24 hrs"
    }];

    $scope.saveCheckIn = function() {
        var allAnswersFinished = $scope.dailyCheckIn.gotUp != '' && 
          						 $scope.dailyCheckIn.toBed != '' && 
          						 $scope.dailyCheckIn.medications != '' && 
          						 $scope.dailyCheckIn.wellness != '' && 
          						 $scope.dailyCheckIn.sleepDuration != '' && 
          						 $scope.dailyCheckIn.sleepDuration != undefined;

        if (allAnswersFinished) {
            $scope.dailyCheckIn.endTime = new Date();
            
            var clinicalStatusJson = localStorage['clinicalStatus'];
            
            if (clinicalStatusJson == undefined) {
            	clinicalStatus = {
            		currentCode: 1,
            		version: 0
            	};
            	
            	clinicalStatusJson = JSON.stringify(clinicalStatus);
            }

            var clinicalStatus = JSON.parse(clinicalStatusJson);

            Pound.add('dailyCheckIn', $scope.dailyCheckIn);

            $scope.nextId = $routeParams.id;

            var sessionID = Guid.create();

            var dailyCount = 0;
        
            if (localStorage['dailyCheckInCount'] != undefined) {
                dailyCount = parseInt(localStorage['dailyCheckInCount']);
            }
            
            dailyCount += 1;
            
            localStorage['dailyCheckInCount'] = "" + dailyCount;

            cordova.getAppVersion.getVersionNumber(function (version) {
                $('div#version').text("v." + version + ' (' + clinicalStatus['currentCode'] + '.' + clinicalStatus['version'] + ')');
                
                (new PurpleRobot()).emitReading('livewell_survey_data', {
                    survey: 'daily',
                    sessionGUID: sessionID,
                    startTime: $scope.dailyCheckIn.startTime,
                    questionDataLabel: 'toBed',
                    questionValue: $scope.dailyCheckIn.toBed,
                    clinicalStatus: clinicalStatus, 
                    dailyCount: dailyCount,
                    appVersion: version 
                }).execute();
            
                (new PurpleRobot()).emitReading('livewell_survey_data', {
                    survey: 'daily',
                    sessionGUID: sessionID,
                    startTime: $scope.dailyCheckIn.startTime,
                    questionDataLabel: 'gotUp',
                    questionValue: $scope.dailyCheckIn.gotUp,
                    clinicalStatus: clinicalStatus, 
                    dailyCount: dailyCount,
                    appVersion: version 
                }).execute();
            
                (new PurpleRobot()).emitReading('livewell_survey_data', {
                    survey: 'daily',
                    sessionGUID: sessionID,
                    startTime: $scope.dailyCheckIn.startTime,
                    questionDataLabel: 'wellness',
                    questionValue: $scope.dailyCheckIn.wellness,
                    clinicalStatus: clinicalStatus, 
                    dailyCount: dailyCount,
                    appVersion: version 
                }).execute();
            
                (new PurpleRobot()).emitReading('livewell_survey_data', {
                    survey: 'daily',
                    sessionGUID: sessionID,
                    startTime: $scope.dailyCheckIn.startTime,
                    questionDataLabel: 'medications',
                    questionValue: $scope.dailyCheckIn.medications,
                    clinicalStatus: clinicalStatus, 
                    dailyCount: dailyCount,
                    appVersion: version 
                }).execute();
            
                (new PurpleRobot()).emitReading('livewell_survey_data', {
                    survey: 'daily',
                    sessionGUID: sessionID,
                    startTime: $scope.dailyCheckIn.startTime,
                    questionDataLabel: 'sleepDuration',
                    questionValue: $scope.dailyCheckIn.sleepDuration,
                    clinicalStatus: clinicalStatus, 
                    dailyCount: dailyCount,
                    appVersion: version 
                }).execute();
            });

			Database.insertWithCallback('daily_check_in', {
				created: Date.now(),
				sessionID: sessionID,
				gotUp: $scope.dailyCheckIn.gotUp,
				toBed: $scope.dailyCheckIn.toBed,
				medications: $scope.dailyCheckIn.medications,
				wellness: $scope.dailyCheckIn.wellness,
				sleepDuration: $scope.dailyCheckIn.sleepDuration
			}, function() {
				Database.updateClinicalStatus(function() {
					Database.updateDailyReachout(function() {
						Database.filter('clinical_reachout', 'updated', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
							$scope.emergency = false; 
							$scope.reachoutMessage = null;

							if (cursor != null) {
								if (cursor.value.message != null) {
									$scope.reachoutMessage = cursor.value.message
									$scope.warningPhoneNumber = $scope.phoneNumber;
								}
							
								if (cursor.value.reachout_code == 1 || cursor.value.reachout_code == 2) {
									$("#continue_modal_warning").removeClass("alert-warning");
									$("#continue_modal_warning").addClass("alert-danger");
								} else { 
									$("#continue_modal_warning").removeClass("alert-danger");
									$("#continue_modal_warning").addClass("alert-warning");
								}
							}
							
							Database.updateDailyReview(function(newCode) {
								console.log("NEW DAILY REVIEW CODE: " + newCode);
								
								$scope.$apply();
			
								$("#continue").modal();
							});
						});
					});
				});
			});
        } else {
            $scope.selectedWarningMessage = 'You must respond to all questions on this page!';

            $("#warning").modal();
        }
    };

    $scope.highlight = function(id, response) {
        $('label').removeClass('highlight');
        $(id).addClass('highlight');
        $scope.dailyCheckIn.wellness = response;
    }

    $scope.warning = function(response) {
        if (response.warningMessage != undefined && response.warningMessage.length > 0) {
            $scope.selectedWarningMessage = response.warningMessage;
            
            if (response.callCoach == true) {
                $scope.warningPhoneNumber = $scope.phoneNumber;
            } else {
                $scope.warningPhoneNumber = null;
            }
            
            $("#warning").modal();
        }
    }
});