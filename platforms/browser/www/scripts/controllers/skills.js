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
           {id:'fundamentals',name:"Building Skills"},
           {id:'awareness',name:"Self-Assessment"},
           {id:'lifestyle',name:"Lifestyle"},
           {id:'coping',name:"Coping"},
           {id:'team',name:"Team"},

           ]
    

  });
