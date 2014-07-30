'use strict';

angular.module('listaTareasApp')
  .filter('telMXDF', function () {
    return function (telefono) {
      return '(' + telefono.substr(0,2) + ')' + ' ' +  telefono.substr(2,4) + '-' +  telefono.substr(6,4);
    };
  });
