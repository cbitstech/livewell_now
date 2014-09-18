'use strict';

describe('Controller: LocalstoragebackuprestoreCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var LocalstoragebackuprestoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocalstoragebackuprestoreCtrl = $controller('LocalstoragebackuprestoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
