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
    $scope.pageTitle = "Toolbox";

        $scope.mainLinks = [
           {id:'fundamentals',name:"Making Changes"},
           {id:'awareness',name:"Self-Assessment"},
           {id:'lifestyle',name:"Lifestyle"},
           {id:'coping',name:"Coping"},
           {id:'team',name:"Team"},

           ]
    

  });
