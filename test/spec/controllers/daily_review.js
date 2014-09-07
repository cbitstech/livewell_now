'use strict';

describe('Controller: DailyReviewCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var DailyReviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailyReviewCtrl = $controller('DailyReviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
