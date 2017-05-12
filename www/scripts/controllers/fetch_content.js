'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:FetchContentCtrl
 * @description
 * # FetchContentCtrl
 * Controller of the livewellApp
 */
 
angular.module('livewellApp').controller('FetchContentCtrl', function ($scope,$http) {
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
            'clinicalStatus'
        ];
        
        var foundRoutes = [];
                
        var payload = {}
        
        _.each(app_collections,function(el){
//          $http.get(SERVER_LOCATION + "users/" + localStorage['userID'] + "/" + el.route + ROUTE_SUFFIX ).success(function(response) {

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
                
                if (el.route == 'clinicalStatus') {
                    var oldStatus = localStorage['clinicalStatus'];
                    
                    if (oldStatus == undefined || oldStatus == null) {
                        localStorage[el.route] = JSON.stringify(response);
                    } else {
                        oldStatus = JSON.parse(oldStatus);
                        var newStatus = response;
                        
                        var newVersion = newStatus["version"];

                        if (newVersion != undefined) {
                            var oldVersion = oldStatus["version"];

                            if (oldVersion == undefined || newVersion > oldVersion) {
                                localStorage[el.route] = JSON.stringify(newStatus);
                            }
                        }
                    }
                } else {
                    if (response.length != undefined){
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
        $http.get(SECURE_CONTENT +'?user='+ localStorage['userID'] +'&token=' + localStorage['registrationid']).success(function(content) {
            localStorage['secureContent'] = JSON.stringify(content);
        }).error(function(err) {
            $scope.error = 'No internet connection!';
            $scope.errorColor = 'red';
        });
    }

    $scope.fetchContent = function(){
        $scope.errorColor = 'green';

        $scope.fetchSecureContent();
        $http.get(SERVER_LOCATION + APP_COLLECTIONS_ROUTE + ROUTE_SUFFIX).success(function(app_collections) {
            downloadContent(_.compact(app_collections));
        }).error(function(err) {
            $scope.error = 'No internet connection!';
            $scope.errorColor = 'red';
        });
    }
    
    $scope.$root.$on('fetchContent', function(event, data) {
        $scope.fetchContent();
    });
});
