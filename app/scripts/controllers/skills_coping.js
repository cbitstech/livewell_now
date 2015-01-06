'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCopingCtrl
 * @description
 * # SkillsCopingCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SkillsCopingCtrl', function ($scope) {
 
  	$scope.pageTitle = "Coping";

    $scope.mainLinks = [
    {name:"Bipolar Coping Questionnaire", id:548, post:'skills_coping'},
    {name:"Bipolar Recovery Questionnaire", id:549, post:'skills_coping'},
    {name:"Depression - Dial Up", id:550, post:'skills_coping'},
    {name:"Mania - Dial Down", id:551, post:'skills_coping'}
		];
  });
