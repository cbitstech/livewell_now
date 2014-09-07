'use strict';

describe('Controller: FoundationsCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var FoundationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoundationsCtrl = $controller('FoundationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
