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
                        returnvalue = 'a';
                }
                if (value == 0){
                        returnvalue = 'b';
                }
                if (value > 0){
                        returnvalue = 'c';
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
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#FFFFFF',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
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
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: 'white'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: 'white'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },

            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
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