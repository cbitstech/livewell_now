'use strict';

describe('Controller: CmsCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var CmsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CmsCtrl = $controller('CmsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
