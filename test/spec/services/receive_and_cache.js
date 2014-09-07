'use strict';

describe('Service: ReceiveAndCache', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var ReceiveAndCache;
  beforeEach(inject(function (_ReceiveAndCache_) {
    ReceiveAndCache = _ReceiveAndCache_;
  }));

  it('should do something', function () {
    expect(!!ReceiveAndCache).toBe(true);
  });

});
