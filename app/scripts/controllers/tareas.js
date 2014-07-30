'use strict';

angular.module('listaTareasApp')
  .controller('TareasCtrl', function ($scope, TareasResource) {

    $scope.tareas = TareasResource.obterTareas.todas();

    $scope.agregarTarea = function() {
      TareasResource.agregar.nuevaTarea({descripcion: $scope.descripcionNuevaTarea, hecho: false});
      $scope.tareas = TareasResource.obterTareas.todas();
    };

    $scope.restantes = function() {
      return $scope.tareas.length;
    };

    $scope.tareasRealizadas = function() {
      var cuenta = 0;
      angular.forEach($scope.tareas, function(tarea) {
        if (tarea.hecho)
        cuenta++;
      });
      return cuenta;
    };

    $scope.eliminar = function() {
      angular.forEach($scope.tareas, function(tarea) {
        if (tarea.hecho) {
          TareasResource.eliminar.tarea({id: tarea.id});
        }
      });
      $scope.tareas = TareasResource.obterTareas.todas();
    };
  });
