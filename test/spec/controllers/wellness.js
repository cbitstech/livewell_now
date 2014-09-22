'use strict';

describe('Controller: WellnessCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var WellnessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WellnessCtrl = $controller('WellnessCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});