'use strict';
angular.module('listaTareasApp', ['ngRoute', 'ngAnimate', 'ngResource',  'ngCookies'])

  .run(function($rootScope, $location, $cookieStore) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if ($cookieStore.get('estaConectado') == false || $cookieStore.get('estaConectado') == null) {
        if(next.templateUrl == 'views/tareas.html' || next.templateUrl == 'views/empleados.html' ) {
          $location.path('/login');
        }
      }
      else {
        var usuario = $cookieStore.get('usuario');

        if(next.templateUrl == 'views/inicio.html' || usuario.puesto != 1) {
          $location.path('/tareas');
        }
      }
    })
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl'
      })
      .when('/tareas', {
        templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl'
      })
      .when('/empleados', {
        templateUrl: 'views/empleados.html',
        controller: 'ControladorEmpleados'
      })
      .otherwise({
        redirectTo: '/'
      });
  });