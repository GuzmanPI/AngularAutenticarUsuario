angular.module('listaTareasApp')
  .factory('Empleados', function() {
    return [
      {
        nombre:'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),
        salario: 12000, telefono:'5587687687', bono: 1.456789
      },
      {
        nombre:'Adrian', paterno: 'Romero', materno: 'Paez', primerDia:  new Date(),
        salario: 12000, telefono:'5512345678', bono: 9.654321
      },
      {
        nombre:'Rodolfo', paterno: 'Solares', materno: 'Madero', primerDia:  new Date(),
        salario: 14000, telefono:'5587654321', bono: 7.333333
      },
      {
        nombre:'Manuel', paterno: 'Perez', materno: 'Solin', primerDia:  new Date(),
        salario: 11000, telefono:'5518273645', bono: 5.272727
      },
      {
        nombre:'Dana', paterno: 'Roman', materno: 'Herrera', primerDia:  new Date(),
        salario: 20000, telefono:'5581726354', bono: 1.444444
      },
      {
        nombre:'Alejandro', paterno: 'Mena', materno: 'Morales', primerDia:  new Date(),
        salario: 5000, telefono:'5512312312', bono: 12.989898
      }
    ];
  });