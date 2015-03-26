'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.pageTitle = "My Skills";

        $scope.mainLinks = [
           {id:'awareness',name:"Awareness"},
           {id:'lifestyle',name:"Lifestyle"},
           {id:'coping',name:"Coping"},
           ]
    

  });
