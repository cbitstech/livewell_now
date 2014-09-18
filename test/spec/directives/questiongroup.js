'use strict';

describe('Directive: questionGroup', function () {

  // load the directive's module
  beforeEach(module('livewellApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<question-group></question-group>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the questionGroup directive');
  }));
});
