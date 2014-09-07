'use strict';

describe('Controller: DailyReviewSummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var DailyReviewSummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailyReviewSummaryCtrl = $controller('DailyReviewSummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
