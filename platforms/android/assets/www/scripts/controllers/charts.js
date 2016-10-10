'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsactivityCtrl
 * @description
 * # ChartsactivityCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
    .controller('ChartsCtrl', function($scope, $timeout,Pound) {

        $scope.pageTitle = 'My Charts';

        
        $timeout(function(){$('td').tooltip()});

        $scope.dailyCheckInResponseArray = Pound.find('dailyCheckIn');
        $scope.recodedResponses = JSON.parse(localStorage['recodedResponses']);
        $scope.timezoneoffset = new Date().getTimezoneOffset() / 60;

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

        console.log($scope.graph);

        $scope.wellness = [];
        $scope.dates = [];

        for (var i = 0; i < $scope.graph.length; i++) {
            debugger;
            $scope.wellness.push(parseInt($scope.graph[i].wellness));
            $scope.dates.push(moment($scope.graph[i].created_at).format('MM-DD'));
        }



        $scope.routine = {
            class: function(value) {
                var returnvalue = null;
                switch (value) {
                    case 0:
                        returnvalue = ['c','missed two'];  
                        break;
                    case 1:
                        returnvalue = ['b','missed one'];
                        break;
                    case 2:
                        returnvalue = ['a','in range']; 
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
                        returnvalue = ['c','took none'];
                        break;
                    case 0.5:
                        returnvalue = ['b','took some']; 
                        break;
                    case 1:
                        returnvalue = ['a','took all'];
                        break;
                }
                return returnvalue
            }
        };

        $scope.sleep = {
            class: function(value) {
                var returnvalue = null;

                switch (value) {
                    case -1:
                        returnvalue = ['c','too little'];
                        break;
                    case -0.5:
                        returnvalue = ['b','too little'];
                        break;
                    case 0:
                        returnvalue = ['a','in range']; 
                        break;
                    case .5:
                        returnvalue = ['b','too much']; 
                        break;
                    case 1:
                        returnvalue = ['c','too much']; 
                        break;
                }
              
                return returnvalue
            }
        };




        Highcharts.theme = {
            exporting: {
                 enabled: false 
            },
            chart: {
                backgroundColor: 'transparent',
                style: {
                    fontFamily: "sans-serif"
                },
                plotBorderColor: '#606063'
            },
            yAxis: {
                max:3,
                min:-3,
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: 'white',
                minorGridLineColor: '#505053',
                minorGridLineWidth: '1.5',
                tickColor: '#707073',
            },
            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };

        Highcharts.setOptions(Highcharts.theme);

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
                    width: 1.5,
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