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

 	var downloadContent = function(app_collections){
 		_.each(app_collections,function(el){
 			$http.get(SERVER_LOCATION + el.route + ROUTE_SUFFIX + "?userId=" + USER_ID)
 			.success(function(response) {
 				localStorage[el.route] = JSON.stringify(_.compact(response));
 				$("#update-summary").append("<div class='alert alert-sm alert-success'>Updating " + el.label + ' successful!</div>')
 			}).error(function(err) {
 				$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to update " + el.label)
 			});
 		})
 	}

 	$scope.fetchContent = function(){
 			$("#update-summary").html("<br/><br/>");
 			$http.get(SERVER_LOCATION + APP_COLLECTIONS_ROUTE + ROUTE_SUFFIX)
 			.success(function(app_collections) {
 				downloadContent(_.compact(app_collections));
 			}).error(function(err) {
 				$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to access content server, please make sure that you hav access to internet connection.<br/>If you continue to have difficulties please contact the study coordination staff.</div>")
 			});
 	}


 });
