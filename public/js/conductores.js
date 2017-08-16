var cargarPagina = function() {
	$(".button-collapse").sideNav();
	$('#cerrar').click(cerrarSesion);
};
 var token = localStorage.getItem('token');
var cerrarSesion = function(e){
	e.preventDefault();
	$.ajax({
		url: 'http://imagentv.jediteam.mx/api/users/logout',
		type: 'POST',
		dataType: 'json',
		timeout: 0,
		data: {
			"token": token,
		},
		success: function(response) {
			console.log('success', response)
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