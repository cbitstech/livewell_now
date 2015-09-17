'use strict';
/**
 * @ngdoc service
 * @name livewellApp.clinicalStatusUpdate
 * @description
 * # clinicalStatusUpdate
 * Service in the livewellApp.
 */
angular.module('livewellApp').service('ClinicalStatusUpdate', function(Pound, UserData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var contents = {};
    contents.execute = function() {
        var currentClinicalStatusCode = function(){return UserData.query('clinicalStatus').currentCode};
        //"[{"code":1,"label":"well"},{"code":2,"label":"prodromal"},{"code":3,"label":"recovering"},{"code":4,"label":"unwell"}]"
        var dailyReviewResponses = Pound.find('dailyCheckIn');
        var weeklyReviewResponses = Pound.find('weeklyCheckIn');
        var newClinicalStatus = currentClinicalStatusCode();
        var sendEmail = false;
        var intensityCount = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0
        };

        for (var i = dailyReviewResponses.length - 1; i > dailyReviewResponses.length - 8; i--) {
            var aWV = 0;
            if (dailyReviewResponses[i] != undefined) {
                var aWV = Math.abs(parseInt(dailyReviewResponses[i].wellness));
            }
            console.log(aWV);
            if (aWV == 0) {
                intensityCount[0] = intensityCount[0] + 1
            }
            if (aWV == 1) {
                intensityCount[1] = intensityCount[1] + 1
            }
            if (aWV == 2) {
                intensityCount[2] = intensityCount[2] + 1
            }
            if (aWV == 3) {
                intensityCount[3] = intensityCount[3] + 1
            }
            if (aWV == 4) {
                intensityCount[4] = intensityCount[4] + 1
            }
        }

        var lastWeeklyResponses = [];

        if (weeklyReviewResponses[weeklyReviewResponses.length - 1] != undefined){
         lastWeeklyResponses = weeklyReviewResponses[weeklyReviewResponses.length - 1].responses;
        }
        else{
         lastWeeklyResponses = [
            {name:'phq1', value:'0'},
            {name:'phq2', value:'0'},
            {name:'phq3', value:'0'},
            {name:'phq4', value:'0'},
            {name:'phq5', value:'0'},
            {name:'phq6', value:'0'},
            {name:'phq7', value:'0'},
            {name:'phq8', value:'0'},
            {name:'amrs1', value:'0'},
            {name:'amrs2', value:'0'},
            {name:'amrs3', value:'0'},
            {name:'amrs4', value:'0'},
            {name:'amrs5', value:'0'}
         ];
        }
        var lWR = lastWeeklyResponses;
        var phq8Sum = parseInt(lWR[0].value) + parseInt(lWR[1].value) + parseInt(lWR[2].value) + parseInt(lWR[3].value) + parseInt(lWR[4].value) + parseInt(lWR[5].value) + parseInt(lWR[6].value) + parseInt(lWR[7].value);
        var amrsSum = parseInt(lWR[8].value) + parseInt(lWR[9].value) + parseInt(lWR[10].value) + parseInt(lWR[11].value);
        //"[{"code":1,"label":"well"},{"code":2,"label":"prodromal"},{"code":3,"label":"recovering"},{"code":4,"label":"unwell"}]"
        switch (parseInt(currentClinicalStatusCode())) {
            case 1://well
                //Well  if abs(wr) ≥ 2 for 4 of last 7 days Prodromal
                if ((intensityCount[2] + intensityCount[3] + intensityCount[4]) >= 4) {
                    newClinicalStatus = 2;
                }
                // //Well   if last ASRM ≥ 6    Well, email alert to coach
                if (amrsSum >= 6) {
                    sendEmail = true;
                }
                // //Well   if last PHQ8 ≥ 10   Well, email alert to coach
                if (phq8Sum >= 10) {
                    sendEmail = true;
                }
                break;
            case 2://prodromal
                //Prodromal if abs(wr) ≤ 1 for 5 of last 7 days Well
                if ((intensityCount[1] + intensityCount[0]) >= 5) {
                    newClinicalStatus = 1;
                }
                //Prodromal if abs(wr) ≥ 3 for 5 of last 7 days Unwell
                if ((intensityCount[3] + intensityCount[4]) >= 5) {
                    newClinicalStatus = 4;
                }
                //Prodromal if last ASRM ≥ 6    Prodromal, email alert to coach
                if (amrsSum >= 6) {
                    sendEmail = true;
                }
                //Prodromal if last PHQ8 ≥ 10   Prodromal, email alert to coach
                if (phq8Sum >= 10) {
                    sendEmail = true;
                }
                break;
            case 3://recovering
                //Recovering    if abs(wr) ≤ 1 for 5 of last 7 days Well
                if ((intensityCount[1] + intensityCount[0]) >= 5) {
                    newClinicalStatus = 1;
                }
                //Recovering    if abs(wr) ≥ 3 for 5 of last 7 days Unwell
                if ((intensityCount[3] + intensityCount[4]) >= 5) {
                    newClinicalStatus = 4;
                }
                //Recovering    if last ASRM ≥ 6    Recovering, email alert to coach
                if (amrsSum >= 6) {
                    sendEmail = true;
                }
                //Recovering    if last PHQ8 ≥ 10   Recovering, email alert to coach
                if (phq8Sum >= 10) {
                    sendEmail = true;
                }
                break;
            case 4://unwell
                //Unwell    if abs(wr) ≤ 2 for 5 of last 7 days Recovering
                if ((intensityCount[0] + intensityCount[1] + intensityCount[2]) >= 5) {
                    newClinicalStatus = 3;
                }
                break;
        }

        var returnStatus = {};
        returnStatus.amrsSum = amrsSum;
        returnStatus.phq8Sum = phq8Sum;
        returnStatus.intensityCount = intensityCount;
        returnStatus.oldStatus = currentClinicalStatusCode();
        returnStatus.newStatus = newClinicalStatus;
        localStorage['clinicalStatus'] = JSON.stringify({
            currentCode: newClinicalStatus
        });
        return returnStatus
    }
    return contents;
});