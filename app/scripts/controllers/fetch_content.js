'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:FetchContentCtrl
 * @description
 * # FetchContentCtrl
 * Controller of the livewellApp
 */
 angular.module('livewellApp')
 .controller('FetchContentCtrl', function ($scope,$http) {

 	var SERVER_LOCATION = 'https://livewell2.firebaseio.com/';
 	var APP_COLLECTIONS_ROUTE = 'appcollections';
 	var USER_ID = 'test';
  var ROUTE_SUFFIX = '.json';

  $scope.error = '';
  $scope.errorColor = 'white';
  $scope.errorClass = '';

 	var downloadContent = function(app_collections){
 		_.each(app_collections,function(el){
 			$http.get(SERVER_LOCATION + el.route + ROUTE_SUFFIX + "?userId=" + USER_ID)
 			.success(function(response) {
 				if (response.length != undefined){
 				localStorage[el.route] = JSON.stringify(_.compact(response));
 				}
 				else {
 				localStorage[el.route] = JSON.stringify(response);
 				}
 			}).error(function(err) {
 				$scope.error = 'Error on: ' + el.label;
 				$scope.errorColor = 'red';
 			});
 		})
 	}

 	$scope.fetchContent = function(){
 			$scope.errorColor = 'green';
 			$http.get(SERVER_LOCATION + APP_COLLECTIONS_ROUTE + ROUTE_SUFFIX)
 			.success(function(app_collections) {
 				downloadContent(_.compact(app_collections));
 			}).error(function(err) {
 				$scope.error = 'No internet connection!';
 				$scope.errorColor = 'red';
 			});
 	}


 });
