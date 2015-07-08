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
    	 var checkinPrompt = Date.parse(localStorage['checkinPrompt']);
    	 var reviewPrompt = Date.parse(localStorage['reviewPrompt']);
    }


    $scope.checkinPrompt = {value:checkinPrompt};
    $scope.reviewPrompt = {value:reviewPrompt};

    console.log($scope);

    $scope.savePromptSchedule = function(){

    		var checkInValues = $("input[name='checkinPrompt']").val().split(":");
    		var reviewValues = $("input[name='reviewPrompt']").val().split(":");

    		$scope.checkinPrompt.value = new Date(2015,0,0,parseInt(checkInValues[0]),parseInt(checkInValues[1]),0);
    		localStorage['checkinPrompt'] = $scope.checkinPrompt.value;
    		$scope.reviewPrompt.value = new Date(2015,0,0,parseInt(reviewValues[0]),parseInt(reviewValues[1]),0);
    		localStorage['checkinPrompt'] = $scope.checkinPrompt.value;
  		    localStorage['review'] = $scope.reviewPrompt.value;

    		debugger;
				if ($scope.checkinPrompt.value > $scope.reviewPrompt.value)  {
				$("form").append('<div class="alert alert-warning">Your check in prompt should be before your Daily Review.</div>')
				}
				else {
        $("form").append('<div class="alert alert-success">Your prompt times have been updated.</div>')
      	}
    };




      });
