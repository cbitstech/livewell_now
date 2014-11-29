'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LessonPlayerCtrl
 * @description
 * # LessonPlayerCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LessonPlayerCtrl', function ($scope, $routeParams) {

$scope.appContent = JSON.parse(localStorage['lessons']);

$scope.getChapterContents = function (chapter_id, appContent) {
    var search_criteria = {
        id: chapter_id
    };
        chapter_contents_list = _.where(appContent, search_criteria)[0].element_list.toString().split(",");
        chapter_contents = [];

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

$scope.loadChapter = $scope.getChapterContents()



});
