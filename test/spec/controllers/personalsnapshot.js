'use strict';

describe('Controller: PersonalsnapshotCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var PersonalsnapshotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonalsnapshotCtrl = $controller('PersonalsnapshotCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
