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

 	var SERVER_LOCATION = 'http://localhost:2403/';
 	var APP_COLLECTIONS_ROUTE = 'app-collections';
 	var USER_ID = 'test';

 	var downloadContent = function(app_collections){
 		_.each(app_collections,function(el){
 			$http.get(SERVER_LOCATION + el.route + "?userId=" + USER_ID)
 			.success(function(response) {
 				localStorage[el.route] = JSON.stringify(response);
 				$("#update-summary").append("<div class='alert alert-sm alert-success'>Updating " + el.label + ' successful!</div>')
 			}).error(function(err) {
 				$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to update " + el.label)
 			});
 		})
 	}

 	$scope.fetchContent = function(){
 			$("#update-summary").html("<br/><br/>");
 			$http.get(SERVER_LOCATION + APP_COLLECTIONS_ROUTE)
 			.success(function(app_collections) {
 				downloadContent(app_collections);
 			}).error(function(err) {
 				$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to access content server, please make sure that you hav access to internet connection.<br/>If you continue to have difficulties please contact the study coordination staff.</div>")
 			});
 	}


 });
