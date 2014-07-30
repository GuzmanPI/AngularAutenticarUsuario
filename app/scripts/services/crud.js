'use strict';

angular.module('listaTareasApp')
  .factory('TareasResource', function($resource) {
    var factory = {
      obterTareas: $resource('http://localhost:8080/tareas', {}, {
        todas: {method: 'GET', isArray: true}
      }),
      agregar: $resource('http://localhost:8080/agregartarea', {}, {
        nuevaTarea: {method: 'GET', params: {descripcion: '@descripcion', hecho: '@hecho'}}
      }),
      eliminar: $resource('http://localhost:8080/eliminartarea', {}, {
        tarea: {method:'GET', params: {id: '@id'}}
      }),
      iniciar: $resource('http://localhost:8080/iniciarSesion', {}, {
        sesion: {method:'GET', params: {nombreUsuario: '@nombreUsuario', clave: '@clave'}}
      })
    };
    return factory;
  });