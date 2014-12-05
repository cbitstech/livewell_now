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
           {id:190,name:"Fundamentals"},
           {id:193,name:"Awareness"},
           {id:191,name:"Lifestyle"},
           {id:192,name:"Coping"},
           {id:195,name:"Team"}

           ]
    

  });
