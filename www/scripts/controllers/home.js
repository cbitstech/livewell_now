'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('HomeCtrl', function ($scope, Pound, Database) {
    var possibleGreetings = ['Welcome back!','Hello!','Greetings!','Good to see you!'];

    $scope.mainLinks = [
        {name:"Foundations", href:"foundations", class: "btn-info"},
        {name:"Toolbox", href:"skills", class: "btn-info"},
        {name:"Wellness Plan", href:"wellness/resources", class: "btn-info"},
    ];
    
    console.log('LIVEWELL');

    var now = Date.now()
    var studyStart = parseFloat(localStorage['startDate']);
    var weekIndex = Math.floor((now - studyStart) / (7 * 24 * 60 * 60 * 1000));
        
    if (weekIndex <= 1) {
        var periodStart = studyStart;
        var periodEnd = studyStart + (2 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[0]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-162'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-162']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        }
        
        if ($scope.mainLinks[0]['class'] == 'btn-info' && localStorage['lesson-read-183'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-183']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        } else {
            $scope.mainLinks[0]['class'] = 'btn-primary';
        }
        
    } else if (weekIndex == 2) {
        var periodStart = studyStart + (2 * 7 * 24 * 60 * 60 * 1000);
        var periodEnd = studyStart + (3 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[0]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-184'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-184']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        }
        
        if ($scope.mainLinks[0]['class'] == 'btn-info' && localStorage['lesson-read-185'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-185']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        } else {
            $scope.mainLinks[0]['class'] = 'btn-primary';
        }
    } else if (weekIndex == 3) {
        var periodStart = studyStart + (3 * 7 * 24 * 60 * 60 * 1000);
        var periodEnd = studyStart + (4 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[0]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-186'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-186']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        }
        
        if ($scope.mainLinks[0]['class'] == 'btn-info' && localStorage['lesson-read-187'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-187']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        } else {
            $scope.mainLinks[0]['class'] = 'btn-primary';
        }
    } else if (weekIndex == 4) {
        var periodStart = studyStart + (4 * 7 * 24 * 60 * 60 * 1000);
        var periodEnd = studyStart + (5 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[0]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-188'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-188']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        }
        
        if ($scope.mainLinks[0]['class'] == 'btn-info' && localStorage['lesson-read-189'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-189']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        } else {
            $scope.mainLinks[0]['class'] = 'btn-primary';
        }
    } else if (weekIndex >= 15) {
        $scope.mainLinks[0]['class'] = 'btn-primary';

        var periodStart = studyStart + (15 * 7 * 24 * 60 * 60 * 1000);

        if ($scope.mainLinks[0]['class'] == 'btn-info' && localStorage['lesson-read-378'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-187']);
            
            if (read > periodStart) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        } else {
            $scope.mainLinks[0]['class'] = 'btn-primary';
        }
    }

    var requiredUserCollections = [];

    $scope.appConfigured = localStorage['appConfigured'];

    $scope.verifyUserContent = function() {
        $scope.errorVerifyUserColor = 'green';
    }

    $scope.startTrial = function() {
        $scope.startDate = new Date().getDay()
        localStorage['appConfigured'] = true;
        window.location.href = "";
    }
    
    $scope.completedDailyCheckIn = true;
	$scope.lastDailyCheckinWasEmergency = false;
    $scope.completedWeeklyCheckIn = true;
    $scope.startedDailyReview = true;

    var today = new Date();
	today.setHours(0)
	today.setMinutes(0);
	today.setSeconds(0);
	today.setMilliseconds(0);

    Database.filter('daily_check_in', 'created', IDBKeyRange.lowerBound(today.getTime()), "next", function(cursor) {
        if (cursor != null) {
            $scope.completedDailyCheckIn = true;
            
            var wellness = parseInt(cursor.value.wellness);
            
            if (Math.abs(wellness) >= 4) {
            	$scope.lastDailyCheckinWasEmergency = true;
            } else {
				$scope.lastDailyCheckinWasEmergency = false;
			}
        } else {
            $scope.completedDailyCheckIn = false;
        }
        
        $scope.$apply();
    }, function() {
        console.log('HOME: Unable to determine if the daily check-in was completed today...');
    });
    
    var sunday = new Date();
    
    while (sunday.getDay() != 0) {
    	sunday = new Date(sunday.getTime() - (12 * 60 * 60 * 1000));
    }

	sunday.setHours(0)
	sunday.setMinutes(0);
	sunday.setSeconds(0);
	sunday.setMilliseconds(0);

    Database.filter('weekly_check_in', 'created', IDBKeyRange.lowerBound(sunday.getTime()), null, function(cursor) {
        if (cursor != null) {
            $scope.completedWeeklyCheckIn = true;
        } else {
            $scope.completedWeeklyCheckIn = false;
        }
        
        $scope.$apply();
    }, function() {
        console.log('HOME: Unable to determine if the weekly check-in was completed since Sunday...');
    });

    Database.filter('daily_review', 'started', IDBKeyRange.lowerBound(today.getTime()), null, function(cursor) {
        if (cursor != null) {
            $scope.startedDailyReview = true;
        } else {
            $scope.startedDailyReview = false;
        }
        
        $scope.$apply();
    }, function() {
        console.log('HOME: Unable to determine if the weekly check-in was completed since Sunday...');
    });

    $scope.greeting = possibleGreetings[Math.floor(Math.random()*possibleGreetings.length)];

    $(".modal-backdrop").remove();
    
    window.setTimeout(function() {
        if (localStorage['appConfigured'] == "true") {
            var lastContentFetch = localStorage['lastContentFetch'];
    
            if (lastContentFetch == undefined) {
                lastContentFetch = "0";
            }
        
            lastContentFetch = parseInt(lastContentFetch);
        
            var now = Date.now();

            if ((now - lastContentFetch) > (1000 * 60 * 5)) { // (1000 * 60 * 60 * 1)) {
                $scope.$root.$emit('fetchContent');
            } else {
//              console.log("NOT FETCHING CONTENT! --> " + (now - lastContentFetch));
            }
        }
    }, 250);
});