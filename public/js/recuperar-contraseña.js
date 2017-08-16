
var correo = localStorage.getItem('correo');
var cargarPagina = function(){
	$('#formulario-recuperacion').submit(enviarCorreo);
	$('#boton').click(enviarCorreo);
};

var enviarCorreo = function(e){
	e.preventDefault();
	console.log("entra")
	$.ajax({
        url: 'http://imagentv.jediteam.mx/api/users/password/reset',
        type: 'POST',
        dataType: 'json',
        timeout: 0,
        data: {
            "email": correo,
        },
        success: function(response) {
            location.href = "confirmacion-envio-contraseña.html";
        },
        error : function(error ) {
        	console.log(error)
    	},
    	complete: function(jqxhr, textStatus){
		   console.log('complete');
		   	
		}

    })

}
$(document).ready(cargarPagina);