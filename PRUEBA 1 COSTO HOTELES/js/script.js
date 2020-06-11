$(document).ready(function()
{
    $('select').material_select();
    $('#calcularBoton').click(function()
    {
        let nombre,tipoHabitacion,ubicacion,noches,total;
        nombre = $('#nombre').val();
        tipoHabitacion = parseInt($('#tipoHabitacion').val());
        ubicacion = parseInt($('#estado').val());
        noches = parseInt($('#noches').val());
        if(nombre == '')
        {
            Swal.fire(
            {
                icon: 'error',
                title: 'Ups...',
                text: 'Falta nombre!',
            });
        }
        else
        {
            switch (tipoHabitacion)
            {
                case 1:
                    total = 20000;
                break;
                case 2:
                    total = 15000;
                break;
                case 3:
                    total = 8000;
                break;
                case 4:
                    total = 6000;
                break;
                case 5:
                    total = 3000;
                break;
            }
            switch (ubicacion)
            {
                case 1:
                    total += 2000;
                break;
                case 2:
                    total += 1500;
                break;
                case 3:
                    total += 800;
                break;
                case 4:
                    total += 600;
                break;
            }
            total *= noches;
            $('#resultado').html("<h3>Nombre del usuario: "+nombre+"</h3><h3><b>El costo de la habitación es: $"+total+"</b></h3>");
        }
    })
});
