'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:CmsCtrl
 * @description
 * # CmsCtrl
 * Controller of the livewellApp
 */
 angular.module('livewellApp')
 .controller('CmsCtrl', function ($scope,Questions) {


  $scope.formFieldTypes = ['checkbox','radio','html','text','textarea','select','email','time','phone','url'];

  $scope.questionGroups = Questions.uniqueQuestionGroups();
  $scope.questions = Questions.questions;
  $scope.responses = Questions.responses;
  $scope.questionCriteria = Questions.questionCriteria;
  $scope.responseCriteria = Questions.responseCriteria;

  console.log(Questions);

  $scope.viewTypes = [{name:'Table', value:'table'},{name:'Map', value:'map'}];
  $scope.viewType = 'table';
  $scope.questionGroup = 'cyoa';
  $scope.selectedQuestions = _.sortBy(Questions.query($scope.questionGroup),'questionGroup');

  $scope.showGroup = function(){
  $scope.selectedQuestions = _.sortBy(Questions.query($scope.questionGroup),'questionGroup');
  console.log($scope.selectedQuestions);

 }

$scope.editResponses = function(id){
    $scope.modalTitle = 'Edit Responses';
    $scope.responseGroupId = id;
    $scope.showResponses = _.where($scope.responses,{responseGroupId:$scope.responseGroupId});
    $scope.uniqueResponseGroups = _.uniq($scope.responses,'respnoseGroupId');
    $("#responseModal").modal();
}


$scope.editQuestion = function(id){

}

$scope.addQuestion = function(id){

}
$scope.deleteQuestion = function(id){

}

$scope.editCriteria = function(id){

}




});