'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LocalstoragebackuprestoreCtrl
 * @description
 * # LocalstoragebackuprestoreCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LocalstoragebackuprestoreCtrl', function ($scope, $sanitize) {
    


  	$scope.initiateLocalBackup = function(){
  		  	$scope.localStorageContents = JSON.stringify(JSON.stringify(localStorage));
  	}

  	$scope.restoreLocalBackup = function(){
  		var restoreContent = JSON.parse(JSON.parse($scope.localStorageContents));

  		_.each(_.keys(restoreContent), function(el){

  			debugger;
  			localStorage[el] = eval("restoreContent." + el);

  		});
  		localStorage = JSON.parse($scope.localStorageContents);
  		//open file or copy and paste string and replace localStorage

  	}

  	$scope.updateRemoteService = function(serverURL){

  		//use the local app-collections store to iterate over all local collections and post to valid routes

  	}

  	$scope.wipeLocalStorage = function(){
  		localStorage.clear();
  	}

  });
