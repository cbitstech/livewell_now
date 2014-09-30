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


  	
    $scope.questionGroups = Questions.uniqueQuestionGroups();

    $scope.viewTypes = [{name:'Table', value:'table'},{name:'Map', value:'map'}];
    $scope.viewType = 'table';
    $scope.questionGroup = 'cyoa';
    $scope.selectedQuestions = _.sortBy(Questions.query($scope.questionGroup),'questionGroup');



    $scope.showGroup = function(){
    	$scope.selectedQuestions = _.sortBy(Questions.query($scope.questionGroup),'questionGroup');
    }


    $scope.editResponse = function(id){
    	alert(id);

    }
    $scope.addResponse = function(id){
    	alert(id);

    }
    $scope.deleteResponse = function(id){
    	alert(id);

    }


    $scope.editQuestion = function(id){
    	$scope.modalTitle = 'Edit Question Content';
    	$scope.modalContents = _.where($scope.selectedQuestions, {id:id})[0].content;
    	$("#responseModal").modal();
    	console.log($scope.modalContent);

    }
    $scope.addQuestion = function(id){

    }
    $scope.deleteQuestion = function(id){

    }


    $scope.editCriteria = function(id){

    }
    
    $scope.addCriteria = function(id){

    }
    
    $scope.deleteCriteria = function(id){

    }



    console.log($scope.selectedQuestions);

  });