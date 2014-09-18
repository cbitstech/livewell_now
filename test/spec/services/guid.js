'use strict';

describe('Service: Guid', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var Guid;
  beforeEach(inject(function (_Guid_) {
    Guid = _Guid_;
  }));

  it('should do something', function () {
    expect(!!Guid).toBe(true);
  });

});
