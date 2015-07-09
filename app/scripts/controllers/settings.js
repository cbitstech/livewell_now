'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.pageTitle = 'Settings';

    if (localStorage['checkinPrompt'] == undefined){
    	 var checkinPrompt = new Date(2015, 0, 1, 9, 0, 0);
    	 var reviewPrompt = new Date(2015, 0, 1, 9, 30, 0);
    }
    else{
    	 var checkinPrompt = new Date(Date.parse(localStorage['checkinPrompt']));
    	 var reviewPrompt = new Date(Date.parse(localStorage['reviewPrompt']));
    }


    $scope.checkinPrompt = {value:checkinPrompt};
    $scope.reviewPrompt = {value:reviewPrompt};

    console.log($scope);

    $scope.savePromptSchedule = function(){

        var checkInValues = $("input[name='checkinPrompt']").val().split(":");
        var reviewValues = $("input[name='reviewPrompt']").val().split(":");

        $scope.checkinPrompt.value = new Date(2015,0,0,parseInt(checkInValues[0]),parseInt(checkInValues[1]),0);
        $scope.reviewPrompt.value = new Date(2015,0,0,parseInt(reviewValues[0]),parseInt(reviewValues[1]),0);

		if ($scope.checkinPrompt.value > $scope.reviewPrompt.value) {

		$("form").append('<div class="alert alert-warning">Your check in prompt should be before your Daily Review.</div>')
		} else {

        localStorage['checkinPrompt'] = $scope.checkinPrompt.value;
        localStorage['reviewPrompt'] = $scope.reviewPrompt.value;

        var dailyCheckInDateTime = $scope.checkinPrompt.value;
        var dailyCheckinDateTimeEnd = new Date(2015,0,0,parseInt(checkInValues[0]),parseInt(checkInValues[1]+1),0);

        var dailyReviewDateTime = $scope.reviewPrompt.value;
        var dailyReviewDateTimeEnd = new Date(2015,0,0,parseInt(reviewValues[0]),parseInt(reviewValues[1]+1),0);

        var dailyReviewRenewalDateTime = new Date(2015,0,0,2,0,0);
        var dailyReviewRenewalDateTimeEnd = new Date(2015,0,0,2,1,0);

        var pr = new PurpleRobot();

        var dailyCheckInDialog =
        pr.showNativeDialog({
          title: "LiveWell",
          message: "Time to check in with LiveWell!" ,
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
          message: "Time to do your daily review!" ,
          buttonLabelA: "OK",
          scriptA: pr.launchApplication('edu.northwestern.cbits.livewell'),
          buttonLabelB: "",
          scriptB: pr.launchApplication('edu.northwestern.cbits.livewell'),
          tag: "dailyReview",
          priority: 3
        });

        var dailyReviewRenew = 
        pr.enableTrigger('dailyReview');

        (new PurpleRobot()).updateTrigger({ triggerId:'dailyCheckIn', random: false, script: dailyCheckInDialog, startAt: dailyCheckInDateTime, endAt: dailyCheckinDateTimeEnd}).execute();

        (new PurpleRobot()).updateTrigger({ triggerId:'dailyReview', random: false, script: dailyReviewDialog, startAt: dailyReviewDateTime, endAt: dailyReviewDateTimeEnd}).execute();

        (new PurpleRobot()).updateTrigger({ triggerId:'dailyReviewReset', random: false, script: dailyReviewRenew, startAt: dailyReviewRenewalDateTime, endAt: dailyReviewRenewalDateTimeEnd}).execute();

        $("form").append('<div class="alert alert-success">Your prompt times have been updated.</div>');
        }
    };

});
