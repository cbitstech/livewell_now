'use strict';

describe('Service: dailyReview', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var dailyReview;
  beforeEach(inject(function (_dailyReview_) {
    dailyReview = _dailyReview_;
  }));

  it('should do something', function () {
    expect(!!dailyReview).toBe(true);
  });

});
