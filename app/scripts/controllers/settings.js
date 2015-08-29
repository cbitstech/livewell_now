'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
    .controller('SettingsCtrl', function($scope) {
        $scope.pageTitle = 'Settings';
        $scope.times = [{
            value: "00:00",
            label: "12:00AM"
        }, {
            value: "00:30",
            label: "12:30AM"
        }, {
            value: "01:00",
            label: "1:00AM"
        }, {
            value: "01:30",
            label: "1:30AM"
        }, {
            value: "02:00",
            label: "2:00AM"
        }, {
            value: "02:30",
            label: "2:30AM"
        }, {
            value: "03:00",
            label: "3:00AM"
        }, {
            value: "03:30",
            label: "3:30AM"
        }, {
            value: "04:00",
            label: "4:00AM"
        }, {
            value: "04:30",
            label: "4:30AM"
        }, {
            value: "05:00",
            label: "5:00AM"
        }, {
            value: "05:30",
            label: "5:30AM"
        }, {
            value: "06:00",
            label: "6:00AM"
        }, {
            value: "06:30",
            label: "6:30AM"
        }, {
            value: "07:00",
            label: "7:00AM"
        }, {
            value: "07:30",
            label: "7:30AM"
        }, {
            value: "08:00",
            label: "8:00AM"
        }, {
            value: "08:30",
            label: "8:30AM"
        }, {
            value: "09:00",
            label: "9:00AM"
        }, {
            value: "09:30",
            label: "9:30AM"
        }, {
            value: "10:00",
            label: "10:00AM"
        }, {
            value: "10:30",
            label: "10:30AM"
        }, {
            value: "11:00",
            label: "11:00AM"
        }, {
            value: "11:30",
            label: "11:30AM"
        }, {
            value: "12:00",
            label: "12:00PM"
        }, {
            value: "12:30",
            label: "12:30PM"
        }, {
            value: "13:00",
            label: "1:00PM"
        }, {
            value: "13:30",
            label: "1:30PM"
        }, {
            value: "14:00",
            label: "2:00PM"
        }, {
            value: "14:30",
            label: "2:30PM"
        }, {
            value: "15:00",
            label: "3:00PM"
        }, {
            value: "15:30",
            label: "3:30PM"
        }, {
            value: "16:00",
            label: "4:00PM"
        }, {
            value: "16:30",
            label: "4:30PM"
        }, {
            value: "17:00",
            label: "5:00PM"
        }, {
            value: "17:30",
            label: "5:30PM"
        }, {
            value: "18:00",
            label: "6:00PM"
        }, {
            value: "18:30",
            label: "6:30PM"
        }, {
            value: "19:00",
            label: "7:00PM"
        }, {
            value: "19:30",
            label: "7:30PM"
        }, {
            value: "20:00",
            label: "8:00PM"
        }, {
            value: "20:30",
            label: "8:30PM"
        }, {
            value: "21:00",
            label: "9:00PM"
        }, {
            value: "21:30",
            label: "9:30PM"
        }, {
            value: "22:00",
            label: "10:00PM"
        }, {
            value: "22:30",
            label: "10:30PM"
        }, {
            value: "23:00",
            label: "11:00PM"
        }, {
            value: "23:30",
            label: "11:30PM"
        }];

        if (localStorage['checkinPrompt'] == undefined) {
            $scope.checkinPrompt = {
            value: "00:00",
            label: "12:00AM"
        };
            $scope.reviewPrompt = {
            value: "00:00",
            label: "12:00AM"
        };
        } else {
            $scope.checkinPrompt = JSON.parse(localStorage['checkinPrompt']);
            $scope.reviewPrompt = JSON.parse(localStorage['reviewPrompt']);
        }

        $scope.savePromptSchedule = function() {
            
            if ($scope.checkinPrompt.value > $scope.reviewPrompt.value) {
                $("form").append('<div class="alert alert-warning">Your check in prompt should be before your Daily Review.</div>')
            } else {
                localStorage['checkinPrompt'] = JSON.stringify($scope.checkinPrompt);
                localStorage['reviewPrompt'] = JSON.stringify($scope.reviewPrompt);
                debugger;
                //new Date(year, month, day, hours, minutes, seconds, milliseconds)
                var checkInValues = $scope.checkinPrompt.value.split(":");
                var reviewValues = $scope.reviewPrompt.value.split(":");
                var dailyCheckInDateTime = new Date(2015, 0, 1, parseInt(checkInValues[0]), parseInt(checkInValues[1]), 0);
                var dailyCheckinDateTimeEnd = new Date(2015, 0, 1, parseInt(checkInValues[0]), parseInt(checkInValues[1]) + 1, 0);
                var dailyReviewDateTime = new Date(2015, 0, 1, parseInt(reviewValues[0]), parseInt(reviewValues[1]), 0);
                var dailyReviewDateTimeEnd = new Date(2015, 0, 1, parseInt(reviewValues[0]), parseInt(reviewValues[1]) + 1, 0);
                var dailyReviewRenewalDateTime = new Date(2015, 0, 1, 2, 0, 0);
                var dailyReviewRenewalDateTimeEnd = new Date(2015, 0, 1, 2, 1, 0);
                var pr = new PurpleRobot();
                debugger;
                var dailyCheckInDialog =
                    pr.showNativeDialog({
                        title: "LiveWell",
                        message: "Time to check in with LiveWell!",
                        buttonLabelA: "OK",
                        scriptA: pr.launchApplication('edu.northwestern.cbits.livewell'),
                        buttonLabelB: "",
                        scriptB: pr.launchApplication('edu.northwestern.cbits.livewell'),
                        tag: "checkIn",
                        priority: 3
                    });
                var dailyReviewDialog =
                    pr.showNativeDialog({
                        title: "LiveWell",
                        message: "Time to do your daily review!",
                        buttonLabelA: "OK",
                        scriptA: pr.launchApplication('edu.northwestern.cbits.livewell'),
                        buttonLabelB: "",
                        scriptB: pr.launchApplication('edu.northwestern.cbits.livewell'),
                        tag: "dailyReview",
                        priority: 3
                    });
                var dailyReviewRenew =
                    pr.enableTrigger('dailyReview');
                (new PurpleRobot()).updateTrigger({
                    triggerId: 'dailyCheckIn',
                    random: false,
                    script: dailyCheckInDialog,
                    startAt: dailyCheckInDateTime,
                    endAt: dailyCheckinDateTimeEnd
                }).execute();
                (new PurpleRobot()).updateTrigger({
                    triggerId: 'dailyReview',
                    random: false,
                    script: dailyReviewDialog,
                    startAt: dailyReviewDateTime,
                    endAt: dailyReviewDateTimeEnd
                }).execute();
                (new PurpleRobot()).updateTrigger({
                    triggerId: 'dailyReviewReset',
                    random: false,
                    script: dailyReviewRenew,
                    startAt: dailyReviewRenewalDateTime,
                    endAt: dailyReviewRenewalDateTimeEnd
                }).execute();
                $("form").append('<div class="alert alert-success">Your prompt times have been updated.</div>');
            }
        };
    });