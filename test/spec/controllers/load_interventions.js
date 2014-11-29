'use strict';

describe('Controller: LoadInterventionsCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var LoadInterventionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadInterventionsCtrl = $controller('LoadInterventionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
