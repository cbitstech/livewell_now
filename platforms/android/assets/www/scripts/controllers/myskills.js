'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:MyskillsCtrl
 * @description
 * # MyskillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('MyskillsCtrl', function ($scope,$location,$filter,$route) {

    $scope.currentSkillId = null;

    $scope.currentSkillContent = null;

    $scope.lessons = JSON.parse(localStorage['lessons']);

		if (JSON.parse(localStorage['mySkills'] != undefined)){
			$scope.mySkills = _.uniq(JSON.parse(localStorage['mySkills']));
		} else {
			$scope.mySkills = [];
		}

 		$scope.skill = function(id){
 			return $filter('filter')($scope.lessons,{id:id},true)
 		};

 		$scope.showSkill = function(id){
 			$scope.currentSkillId = id;
 			$scope.currentSkillContent = $scope.skill(id)[0].main_content;
 		}

		$scope.removeSkill = function () {

			var id = $scope.currentSkillId;
			var array = $scope.mySkills;
			var index = array.indexOf(id);

			if (index > -1) {
			    array.splice(index, 1);
			}

			$scope.mySkills = array;

			localStorage['mySkills'] = JSON.stringify($scope.mySkills);

			$route.reload()

		}




  });
