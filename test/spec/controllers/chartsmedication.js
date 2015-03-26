'use strict';

describe('Controller: ChartsmedicationCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var ChartsmedicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsmedicationCtrl = $controller('ChartsmedicationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
