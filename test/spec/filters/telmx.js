'use strict';

describe('Filter: telMXDF', function () {

  // load the filter's module
  beforeEach(module('listaTareasApp'));

  // initialize a new instance of the filter before each test
  var $filter, telMXDF;

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');

    telMXDF = $filter('telMXDF');
  }));

  it('should return the input prefixed with "telMXDF filter:"', function () {
    var tel = '5512345678';
    expect(telMXDF(tel)).toBe('(55) 1234-5678');
  });

});
