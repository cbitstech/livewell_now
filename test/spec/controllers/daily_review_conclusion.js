'use strict';

describe('Controller: DailyReviewConclusionCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var DailyReviewConclusionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailyReviewConclusionCtrl = $controller('DailyReviewConclusionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
