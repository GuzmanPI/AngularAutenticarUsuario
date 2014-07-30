'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var TareasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TareasCtrl = $controller('TareasCtrl', {
      $scope: scope
    });
  }));

  it('Validando que el arreglo de tareas sea definido despues de inicializar TareasCtrl', function() {
    expect(scope.tareas).not.toBeDefined();
    scope.init();
    expect(scope.tareas).toBeDefined();
    expect(scope.tareas).not.toBeNull();
    expect(scope.tareas).not.toBeNaN();
  });

});
