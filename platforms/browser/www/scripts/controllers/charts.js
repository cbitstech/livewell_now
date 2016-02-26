'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsactivityCtrl
 * @description
 * # ChartsactivityCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
    .controller('ChartsCtrl', function($scope, Pound) {

        $scope.pageTitle = 'My Charts';


        $('td').tooltip();

        $scope.dailyCheckInResponseArray = Pound.find('dailyCheckIn');
        $scope.recodedResponses = JSON.parse(localStorage['recodedResponses']);

        $scope.graph = []
        if ($scope.dailyCheckInResponseArray.length > 7) {
            $scope.graph[6] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 1];
            $scope.graph[5] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 2];
            $scope.graph[4] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 3];
            $scope.graph[3] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 4];
            $scope.graph[2] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 5];
            $scope.graph[1] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 6];
            $scope.graph[0] = $scope.dailyCheckInResponseArray[$scope.dailyCheckInResponseArray.length - 7];
        } else {
            $scope.graph = $scope.dailyCheckInResponseArray;
        }


        $scope.wellness = [];
        $scope.dates = [];

        for (var i = 0; i < $scope.graph.length; i++) {
            $scope.wellness.push(parseInt($scope.dailyCheckInResponseArray[i].wellness));
            var datepush = $scope.dailyCheckInResponseArray[i].created_at.split('T')[0].split('-');
            $scope.dates.push(datepush[1] + '-' + datepush[2]);
        }

        $scope.routine = {
            class: function(value) {
                var returnvalue = null;
                switch (value) {
                    case 0:
                        returnvalue = 'c';
                        break;
                    case 1:
                        returnvalue = 'b';
                        break;
                    case 2:
                        returnvalue = 'a';
                        break;
                }
                return returnvalue
            }
        };

        $scope.medication = {
            class: function(value) {
                var returnvalue = null;
                switch (value) {
                    case 0:
                        returnvalue = 'c';
                        break;
                    case 0.5:
                        returnvalue = 'b';
                        break;
                    case 1:
                        returnvalue = 'a';
                        break;
                }
                return returnvalue
            }
        };

        $scope.sleep = {
            class: function(value) {
                var returnvalue = null;
                if (value < 0){
                        returnvalue = 'c';
                }
                if (value == 0){
                        returnvalue = 'a';
                }
                if (value > 0){
                        returnvalue = 'b';
                }
                return returnvalue
            }
        };

        $scope.config = {
            title: {
                text: ' ',
                x: -20, //center,
                enabled: false
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: $scope.dates
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: 'white'
                }],
                labels: {
                    enabled: false
                }
            },
            tooltip: {
                valueSuffix: '',
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            series: [{
                showInLegend: false,
                name: 'Wellness',
                data: $scope.wellness
            }]
        };
    });