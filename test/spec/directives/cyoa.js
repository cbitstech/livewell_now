'use strict';

describe('Directive: cyoa', function () {

  // load the directive's module
  beforeEach(module('livewellApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cyoa></cyoa>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cyoa directive');
  }));
});
