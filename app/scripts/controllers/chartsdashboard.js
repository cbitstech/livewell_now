'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsdashboardCtrl
 * @description
 * # ChartsdashboardCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('ChartsdashboardCtrl', function ($scope) {

  $scope.config = {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80
        },


        title: {
            text: 'Weekly Dashboard'
        },

        xAxis: {
            categories: ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su']
        },

        yAxis: {
            categories: ['Routine', 'Sleep', 'Medications', 'Wellness'],
            title: null
        },

        colorAxis: {
            // min: 0, IS THERE a way to do multiple colors at diff thresh (eg orange, yellow, green)
            min: 0,
            max: 100,
            reversed: false,
            stops: [
                [0, '#fb0101'],
                //[0.25, '#fb9801'],
                [0.5, '#FCEE21'],
                [0.9, '#04C300']
            ]            
        },
       
        tooltip: {
            formatter: function () {
                return 'On <b>' + this.series.xAxis.categories[this.point.x] + '</b>, you scored <br><b>' + this.point.value + '</b> % in <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Percent',
            //borderWidth: 0,
            //borderColor: Highcharts.getOptions().colors[1],
            data: [ 
                // Routine %
                [0, 2, 75],
                [1, 2, 75],
                [2, 2, 87.5],
                [3, 2, 62.5],
                [4, 2, 50],
                [5, 2, 62.5],
                [6, 2, 50],
                // Sleep %
                [0, 1, 100],
                [1, 1, 100],
                [2, 1, 100],
                [3, 1, 100],
                [4, 1, 87.5],
                [5, 1, 87.5],
                [6, 1, 87.5],
                // Med %
                [0, 0, 87.5],
                [1, 0, 87.5],
                [2, 0, 87.5],
                [3, 0, 62.5],
                [4, 0, 62.5],
                [5, 0, 62.5],
                [6, 0, 87.5],
                // Wellness score
                [0, 3, 87.5],
                [1, 3, 87.5],
                [2, 3, 87.5],
                [3, 3, 100],
                [4, 3, 100],
                [5, 3, 100],
                [6, 3, 100]
            ],
            dataLabels: {
                enabled: true,
                color: '#000000',
                //format: '{} %'
            }
        }]
    };
  });
