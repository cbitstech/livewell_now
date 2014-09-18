'use strict';

describe('Service: DailyReview', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var DailyReview;
  beforeEach(inject(function (_DailyReview_) {
    DailyReview = _DailyReview_;
  }));

  it('should do something', function () {
    expect(!!DailyReview).toBe(true);
  });

});
