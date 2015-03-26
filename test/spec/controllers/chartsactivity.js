'use strict';

describe('Controller: ChartsactivityCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var ChartsactivityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsactivityCtrl = $controller('ChartsactivityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
