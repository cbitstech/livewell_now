'use strict';

describe('Controller: AwarenessCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var AwarenessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AwarenessCtrl = $controller('AwarenessCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
