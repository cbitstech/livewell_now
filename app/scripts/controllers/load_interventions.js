'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:LoadInterventionsCtrl
 * @description
 * # LoadInterventionsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('LoadInterventionsCtrl', function ($scope, $location) {
    
  	$scope.hierarchy = [
  		
  {
    "category":"Symptomatic-Severe Up",
    "code":23,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Severe Down",
    "code":22,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Moderate Up-Onset-Provider",
    "code":21,
    "disabled":"disabled"
  },
  {
    "category":"Symptoms of mania",
    "code":20,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Moderate Up-Chronic-Self",
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Moderate Down-Onset-Provider",
    "code":18,
    "disabled":"disabled"
  },
  {
    "category":"Symptoms of depression",
    "code":17,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Moderate Down-Chronic-Self",
    "code":16,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Mild Up-Prodromal-Provider",
    "code":15,
    "disabled":"disabled"
  },
  {
    "category":"Early warning signs of mania",
    "code":14,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Mild Up-Residual-Self",
    "code":13,
    "disabled":"disabled"
  },
  {
    "category":"Symptomatic-Mild Down-Prodromal-Provider",
    "code":12,
    "disabled":"disabled"
  },
  {
    "category":"Early warning signs of depression",
    "code":11,
    "disabled":""
  },
  {
    "category":"Symptomatic-Mild Down-Residual-Self",
    "code":10,
    "disabled":"disabled"
  },
  {
    "category":"AtRisk-Medications-Severe",
    "code":9,
    "disabled":"disabled"
  },
  {
    "category":"Taking medications",
    "code":8,
    "disabled":""
  },
  {
    "category":"AtRisk-Sleep Less-Severe",
    "code":7,
    "disabled":"disabled"
  },
  {
    "category":"AtRisk-Sleep More-Severe",
    "code":6,
    "disabled":"disabled"
  },
  {
    "category":"Sleeping too little",
    "code":5,
    "disabled":""
  },
  {
    "category":"AtRisk-Sleep Erratic",
    "code":4,
    "disabled":"disabled"
  },
  {
    "category":"Sleeping too much",
    "code":3,
    "disabled":"disabled"
  },
  {
    "category":"Maintaining a routine",
    "code":2,
    "disabled":""
  },
  {
    "category":"Doing well",
    "code":1,
    "disabled":""
  }
];



  });
