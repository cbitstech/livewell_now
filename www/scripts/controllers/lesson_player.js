'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LessonPlayerCtrl
 * @description
 * # LessonPlayerCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('LessonPlayerCtrl', function ($scope, $routeParams, $sce, $location) {
	$scope.getChapterContents = function (chapter_id, appContent) {
		console.log("CHAPTER: " + chapter_id + " -- APP_CONTENT: " + appContent);
		
		var search_criteria = {
			id: parseInt(chapter_id)
		};

		var chapter_contents_list = _.where(appContent, search_criteria)[0].element_list.toString().split(",");
		var chapter_contents = [];

		// console.log("Chapter selected:",_.where(appContent, search_criteria)[0]);
		// console.log("Chapter contents list:",chapter_contents_list);

		_.each(chapter_contents_list, function (element) {
			// console.log(parseInt(element));
			chapter_contents.push(_.where(appContent, {
				id: parseInt(element)
			})[0]);
		});

		return chapter_contents;
	};

	$scope.lessons = JSON.parse(localStorage['lessons']);

	$scope.backButton = '&lt;';
	$scope.backButtonClass = 'btn btn-info';
	$scope.nextButton = '&gt;';
	$scope.nextButtonClass = 'btn btn-primary';
	$scope.currentSlideIndex = 0;

	$scope.pageTitle = _.where($scope.lessons, {id:parseInt($routeParams.id)})[0].pretty_name;

	$scope.currentChapterContents = $scope.getChapterContents($routeParams.id,$scope.lessons);

	$scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;


	$scope.next = function(){
		if ($scope.currentSlideIndex+1 < $scope.currentChapterContents.length) {
			$scope.currentSlideIndex++;
			$scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
		} else {
			if ($routeParams.post == undefined) { 
				window.location.href = '#/';
			} else {
				window.location.href = '#/' + $routeParams.post;
			}
		}

		if ($scope.currentSlideIndex+1 == $scope.currentChapterContents.length) {
			$scope.nextButton = '&gt;';
		} else{
			$scope.nextButton = '&gt;';
		}
	}

	$scope.back = function(){
		if ($scope.currentSlideIndex > 0) {
			$scope.currentSlideIndex--;
			$scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
		}
	}
});
