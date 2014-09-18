'use strict';

describe('Service: UserDetails', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var UserDetails;
  beforeEach(inject(function (_UserDetails_) {
    UserDetails = _UserDetails_;
  }));

  it('should do something', function () {
    expect(!!UserDetails).toBe(true);
  });

});
