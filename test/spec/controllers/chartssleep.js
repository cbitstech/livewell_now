'use strict';

describe('Controller: ChartssleepCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var ChartssleepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartssleepCtrl = $controller('ChartssleepCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
