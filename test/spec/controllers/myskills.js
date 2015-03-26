'use strict';

describe('Controller: MyskillsCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var MyskillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyskillsCtrl = $controller('MyskillsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
