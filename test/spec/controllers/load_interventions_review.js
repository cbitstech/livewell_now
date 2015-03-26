'use strict';

describe('Controller: LoadInterventionsReviewCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var LoadInterventionsReviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadInterventionsReviewCtrl = $controller('LoadInterventionsReviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
