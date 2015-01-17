'use strict';

describe('Controller: SummaryPlayerCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var SummaryPlayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummaryPlayerCtrl = $controller('SummaryPlayerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
