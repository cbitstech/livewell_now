'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:FetchContentCtrl
 * @description
 * # FetchContentCtrl
 * Controller of the livewellApp
 */
 
angular.module('livewellApp').controller('FetchContentCtrl', function ($scope, $http, Database) {
//  var SERVER_LOCATION = 'https://livewell2.firebaseio.com/';
    var SERVER_LOCATION = 'https://livewellcss.northwestern.edu/firebase-proxy/';
    var SECURE_CONTENT = 'https://mohrlab.northwestern.edu/livewell-dash/content/'; 
    var APP_COLLECTIONS_ROUTE = 'appcollections';
    var USER_ID = $scope.userID;
    var ROUTE_SUFFIX = '.json';

    var $body = angular.element(document.body);
    var $rootScope = $body.scope().$root;

    $scope.error = '';
    $scope.errorColor = 'white';
    $scope.errorClass = '';

    var downloadContent = function(app_collections){
        if($scope.userID != undefined) {
            localStorage['userID'] = $scope.userID; 
        } 

        var payloadRoutes = [
            'team',
            'medications',
            'smarts',
            'anchors',
            'plan',
            'sleepRoutineRanges',
            'clinicalStatus',
            'startDate'
        ];
        
        var foundRoutes = [];
                
        var payload = {}
        
        _.each(app_collections,function(el){
//          $http.get(SERVER_LOCATION + "users/" + localStorage['userID'] + "/" + el.route + ROUTE_SUFFIX ).success(function(response) {

//			console.log("FETCH URL: " + SERVER_LOCATION + localStorage['userID'] + "/" + el.route + ROUTE_SUFFIX);

            $http.get(SERVER_LOCATION + localStorage['userID'] + "/" + el.route + ROUTE_SUFFIX ).success(function(response) {
                if(el.route == 'team' && response == null){
                    alert('THE USER HAS NOT BEEN CONFIGURED!');
                }
                
                if (payloadRoutes.includes(el.route)) {
                    payload[el.route] = response;
                    
                    foundRoutes.push(el.route);
                    
                    if (foundRoutes.length == payloadRoutes.length) {
                        payload['livewell_id'] = localStorage['userID'];
                        
                        (new PurpleRobot()).emitReading('livewell_personalized_content_download', payload).execute();
                    }
                };

//            	console.log('ROUTE: ' + el.route);
                
                if (el.route == 'clinicalStatus') {
                    var oldStatus = localStorage['clinicalStatus'];
                    
                    console.log('OLD CLINICAL STATUS: ' + oldStatus);
                    
                    if (oldStatus == undefined || oldStatus == null) {
	                    console.log('SAVE 1: ' + JSON.stringify(response));
                        localStorage[el.route] = JSON.stringify(response);
                        
                        var dbObject = {
							updated: Date.now(),
							status_code: response['currentCode'],
							version: response['version'],
							source: 'server'
						};

				        Database.insertWithCallback('clinical_status', dbObject, function() {
				        	console.log('STATUS CODE INITED: ' + JSON.stringify(dbObject))
				        	
				        	localStorage['dailyCheckInCount'] = "0";
                        });
                    } else {
                        oldStatus = JSON.parse(oldStatus);

                        var newStatus = response;
                        
                        var newVersion = newStatus["version"];

                        if (newVersion != undefined) {
                            var oldVersion = oldStatus["version"];

                            if (oldVersion == undefined || newVersion > oldVersion) {
								console.log('SAVE 2: ' + JSON.stringify(response));

                                localStorage[el.route] = JSON.stringify(newStatus);
                                
								var dbObject = {
									updated: Date.now(),
									status_code: response['currentCode'],
									version: response['version'],
									source: 'server'
								};

								Database.insertWithCallback('clinical_status', dbObject, function() {
									console.log('STATUS CODE UPDATED: ' + JSON.stringify(dbObject))

						        	localStorage['dailyCheckInCount'] = "0";
								});
                            }
                        }
                    }
                } else {
					if (el.route == 'startDate') {
//						console.log('RESPONSE FOR DATE: ' + response);
                        localStorage[el.route] = response;
					}
                    else if (response.length != undefined){
                        localStorage[el.route] = JSON.stringify(_.compact(response));
                    } else {
                        localStorage[el.route] = JSON.stringify(response);
                    }
                }
                
                var now = Date.now();
                localStorage['lastContentFetch'] = "" + now;
            }).error(function(err) {
                $scope.error = 'Error on: ' + el.label;
                $scope.errorColor = 'red';
            });
        })
   }

    $scope.fetchSecureContent = function(){
        var fetchUrl = SECURE_CONTENT +'?user='+ localStorage['userID'] +'&token=' + localStorage['registrationid'];
        
//        console.log('SECURE LOCATION: ' + SECURE_CONTENT);

        $http.get(SECURE_CONTENT).success(function(content) {
            localStorage['secureContent'] = JSON.stringify(content);
        }).error(function(err) {
            $scope.error = 'No internet connection!';
            $scope.errorColor = 'red';
            
//            console.log('SECURE FETCH FAIL: ' + err);
        });
    }

    $scope.fetchContent = function(){
        $scope.errorColor = 'green';

//        $scope.fetchSecureContent();
        
//        console.log('LOCATION: ' + SERVER_LOCATION + APP_COLLECTIONS_ROUTE + ROUTE_SUFFIX);
        
        $http.get(SERVER_LOCATION + APP_COLLECTIONS_ROUTE + ROUTE_SUFFIX).success(function(app_collections) {
            downloadContent(_.compact(app_collections));
        }).error(function(err) {
            $scope.error = 'No internet connection!';
            $scope.errorColor = 'red';

//            console.log('FETCH FAIL: ' + err);
        });
    }
    
    $scope.$root.$on('fetchContent', function(event, data) {
        $scope.fetchContent();
    });
});
