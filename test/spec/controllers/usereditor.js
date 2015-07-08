'use strict';

describe('Controller: UsereditorCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var UsereditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsereditorCtrl = $controller('UsereditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
