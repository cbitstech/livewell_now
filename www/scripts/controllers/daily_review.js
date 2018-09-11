'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyReviewCtrl', function($scope, $routeParams, $timeout, UserData, Pound, DailyReviewAlgorithm, ClinicalStatusUpdate, Guid, Database) {
    $scope.pageTitle = "Daily Review";

    Pound.add('dailyReviewStarted', {
        userStarted: true,
        code: $scope.code
    });

    $timeout(function() {
    	$('.add-tooltip').tooltip()
    });

    $scope.routineData = UserData.query('sleepRoutineRanges');

    $scope.cleanTime = function(militaryTime){
        var time = militaryTime.toString();
        var cleanTime = '';

        if (time[0] == '0' && time[1] == '0'){
            cleanTime = '12:' + time[2] + time[3];
        } else if( time[0] == '0'){
            cleanTime =  time[1] + ":" + time[2] + time[3];
        } else if (parseInt(time[0] + time[1]) > 12 ){
            cleanTime = (parseInt(time[0] + time[1]) - 12) + ":" + time[2] + time[3];
        } else {
            cleanTime = time[0] + time[1] + ":" + time[2] + time[3];
        }

        if (parseInt(militaryTime) > 1200){
            return cleanTime + ' PM'
        } else {
            return cleanTime + ' AM'
        }
    }

    $scope.interventionGroups = UserData.query('dailyReview');

    $scope.updatedClinicalStatus = {};

    var runAlgorithm = function(Pound) {
        var object = {};
        var sessionID = Guid.create();
        
        // ???: What to do if less than 5 checkins?

        object.code = DailyReviewAlgorithm.code();
        
        var dailyCount = 0;
        
        if (localStorage['dailyCheckInCount'] != undefined) {
            dailyCount = parseInt(localStorage['dailyCheckInCount']);
        }
        
        var toReport = null;
        
        if (dailyCount >= 5) {
            $scope.updatedClinicalStatus = ClinicalStatusUpdate.execute();
            
            toReport = $scope.updatedClinicalStatus;
        } else {
            toReport = ClinicalStatusUpdate.noExecute();
//            console.log('4 OR FEWER RESPONSES -- NOT UPDATING STATUS CODE');
        }

        var clinicalStatus = JSON.parse(localStorage['clinicalStatus']);
        
        var recodedResponses = localStorage['recodedResponses'];
        
        if (recodedResponses == undefined) {
            recodedResponses = '{}';
        }

        (new PurpleRobot()).emitReading('livewell_dailyreviewcode', {
            sessionGUID: sessionID,
            code: object.code,
            clinicalStatus: clinicalStatus,
            recodedResponses: recodedResponses
        }).execute();
        
        (new PurpleRobot()).emitReading('livewell_clinicalstatus', {
            sessionGUID: sessionID,
            status: toReport,
            clinicalStatus: clinicalStatus
        }).execute();

        return object
    }
    
    $scope.code = runAlgorithm().code;

    $scope.percentages = DailyReviewAlgorithm.percentages();

    $(".modal-backdrop").remove();

    $scope.dailyReviewCategory = _.where($scope.interventionGroups, {
        code: $scope.code
    })[0].questionSet;

    $scope.interventionResponse = function() {
        if ($scope.code == 1 || $scope.code == 2) {
            return 'Please contact your care provider or hospital';
        } else {
            if (_.where($scope.interventionGroups, { code: $scope.code })[0] != undefined) {
                if (typeof(_.where($scope.interventionGroups, { code: $scope.code })[0].response) == 'object') {
                    return _.where($scope.interventionGroups, {
                        code: $scope.code
                    })[0].response[Math.floor((Math.random() * _.where($scope.interventionGroups, {
                        code: $scope.code
                    })[0].response.length))];
                } else {
                    return _.where($scope.interventionGroups, {
                        code: $scope.code
                    })[0].response;
                }
            }
        }
    }

    window.needsDailyReviewReview = false;
    
});