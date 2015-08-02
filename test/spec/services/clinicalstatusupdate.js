'use strict';

describe('Service: clinicalStatusUpdate', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var clinicalStatusUpdate;
  beforeEach(inject(function (_clinicalStatusUpdate_) {
    clinicalStatusUpdate = _clinicalStatusUpdate_;
  }));

  it('should do something', function () {
    expect(!!clinicalStatusUpdate).toBe(true);
  });

});
