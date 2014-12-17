'use strict';

describe('Controller: SkillsFundamentalsCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var SkillsFundamentalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsFundamentalsCtrl = $controller('SkillsFundamentalsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
