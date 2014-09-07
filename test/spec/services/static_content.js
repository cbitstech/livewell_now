'use strict';

describe('Service: StaticContent', function () {

  // load the service's module
  beforeEach(module('livewellApp'));

  // instantiate service
  var StaticContent;
  beforeEach(inject(function (_StaticContent_) {
    StaticContent = _StaticContent_;
  }));

  it('should do something', function () {
    expect(!!StaticContent).toBe(true);
  });

});
