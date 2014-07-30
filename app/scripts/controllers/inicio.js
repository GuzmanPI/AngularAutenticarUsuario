'use strict';

angular.module('listaTareasApp')
  .controller('InicioCtrl', function ($scope, $q, TareasResource, $log, $cookieStore, $location) {
    var inisioSesion = $q.defer();

    inisioSesion.promise.then(usrASesion);

    function usrASesion(usr) {
      $scope.usrConectado.nombre = usr.nombre;
      $scope.usrConectado.puesto = usr.puesto;
      $scope.usrConectado.estaConectado = true;

      $log.info($scope.usrConectado);

      $cookieStore.put('estaConectado', true);
      $cookieStore.put('usuario', usr);

      $location.path('/tareas');
    };

    $scope.inisiarSesion = function() {
      var usr = TareasResource.iniciar.sesion({nombreUsuario: $scope.usuario.nombreUsuario, clave: $scope.usuario.clave})
        .$promise.then(function(usr) {
          inisioSesion.resolve(usr);
        });
    };
  });
