'use strict';

describe('Controller: ChartsroutineCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var ChartsroutineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsroutineCtrl = $controller('ChartsroutineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
