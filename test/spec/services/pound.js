'use strict';

describe('Service: Pound', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var Pound;
  beforeEach(inject(function (_Pound_) {
    Pound = _Pound_;
  }));

  it('should do something', function () {
    expect(!!Pound).toBe(true);
  });

});
