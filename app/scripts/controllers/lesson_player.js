'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LessonPlayerCtrl
 * @description
 * # LessonPlayerCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LessonPlayerCtrl', function ($scope, $routeParams, $sce, $location) {


$scope.getChapterContents = function (chapter_id, appContent) {
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

$scope.backButton = 'Back';
$scope.backButtonClass = 'btn btn-default';
$scope.nextButton = 'Next';
$scope.nextButtonClass = 'btn btn-primary';
$scope.currentSlideIndex = 0;


$scope.currentChapterContents = $scope.getChapterContents($routeParams.id,$scope.lessons);

$scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;

$scope.next = function(){
    if ($scope.currentSlideIndex+1 < $scope.currentChapterContents.length){
    $scope.currentSlideIndex++;
    $scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
    }
    else {
    window.location.href = '#/';
    }

    if ($scope.currentSlideIndex+1 == $scope.currentChapterContents.length){
        $scope.nextButton = 'Home';
    }
    else{
        $scope.nextButton = 'Next';

    }
}

$scope.back = function(){
    if ($scope.currentSlideIndex > 0){
    $scope.currentSlideIndex--;
    $scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
    }

}

});
