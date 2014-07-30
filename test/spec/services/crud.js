'use strict';

describe('Service: Crud', function () {

  // load the service's module
  beforeEach(module('listaTareasApp'));

  // instantiate service
  var Crud;
  beforeEach(inject(function (_Crud_) {
    Crud = _Crud_;
  }));

  it('should do something', function () {
    expect(!!Crud).toBe(true);
  });

});
