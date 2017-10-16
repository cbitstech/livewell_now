'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:FoundationsCtrl
 * @description
 * # FoundationsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('FoundationsCtrl', function ($scope) {
    $scope.pageTitle = "Foundations";

    $scope.mainLinks = [
        { name:"Overview", id:162, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Basic Facts ", id:183, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Medications", id:184, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Lifestyle Skills", id:185, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Coping Skills", id:186, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Team", id:187, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Awareness", id:188, post:'foundations', type:'lesson_player', class: 'btn-info' },
        { name:"Action", id:189, post:'foundations', type:'lesson_player', class: 'btn-info' }
    ];
    
    var now = (new Date()).getTime();
    
    var wrapUpLink = { name:"Wrapping Up", id:378, post:'foundations', type:'lesson_player', class: 'btn-info' };
    
    var studyStart = parseFloat(localStorage['startDate']);
    
    var weekIndex = Math.floor((now - studyStart) / (7 * 24 * 60 * 60 * 1000));
    
    if (weekIndex <= 1) {
        var periodStart = studyStart;
        var periodEnd = studyStart + (2 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[0]['class'] = 'btn-primary';
        $scope.mainLinks[1]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-162'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-162']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[0]['class'] = 'btn-info';
            }
        }
        
        if (localStorage['lesson-read-183'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-183']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[1]['class'] = 'btn-info';
            }
        }
    } else if (weekIndex == 2) {
        var periodStart = studyStart + (2 * 7 * 24 * 60 * 60 * 1000);
        var periodEnd = studyStart + (3 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[2]['class'] = 'btn-primary';
        $scope.mainLinks[3]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-184'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-184']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[2]['class'] = 'btn-info';
            }
        }
        
        if (localStorage['lesson-read-185'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-185']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[3]['class'] = 'btn-info';
            }
        }
    } else if (weekIndex == 3) {
        var periodStart = studyStart + (3 * 7 * 24 * 60 * 60 * 1000);
        var periodEnd = studyStart + (4 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[4]['class'] = 'btn-primary';
        $scope.mainLinks[5]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-186'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-186']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[4]['class'] = 'btn-info';
            }
        }
        
        if (localStorage['lesson-read-187'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-187']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[5]['class'] = 'btn-info';
            }
        }
    } else if (weekIndex == 4) {
        var periodStart = studyStart + (4 * 7 * 24 * 60 * 60 * 1000);
        var periodEnd = studyStart + (5 * 7 * 24 * 60 * 60 * 1000);
        
        $scope.mainLinks[6]['class'] = 'btn-primary';
        $scope.mainLinks[7]['class'] = 'btn-primary';
        
        if (localStorage['lesson-read-188'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-188']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[6]['class'] = 'btn-info';
            }
        }
        
        if (localStorage['lesson-read-189'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-189']);
            
            if (read > periodStart && read < periodEnd) {
                $scope.mainLinks[7]['class'] = 'btn-info';
            }
        }
    } else if (weekIndex >= 15) {
        $scope.mainLinks.push(wrapUpLink);

        $scope.mainLinks[8]['class'] = 'btn-primary';

        var periodStart = studyStart + (15 * 7 * 24 * 60 * 60 * 1000);

        if (localStorage['lesson-read-378'] != undefined) {
            var read = parseFloat(localStorage['lesson-read-187']);
            
            if (read > periodStart) {
                $scope.mainLinks[8]['class'] = 'btn-info';
            }
        }
    }
});
