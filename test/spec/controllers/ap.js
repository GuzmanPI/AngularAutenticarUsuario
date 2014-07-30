'use strict';

describe('Controller: ApctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var ApctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApctrlCtrl = $controller('ApctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
