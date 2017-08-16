var cargarPagina = function() {
    
    console.log(localStorage.getItem('token'))
    accederLista()
}

var accederLista = function() {
    $.ajax({
        url: 'http://imagentv.jediteam.mx/api/users/account',
        type: 'GET',
        dataType: 'json',
         headers: {
             'X-Authorization': localStorage.getItem('token'),
        },
        /*beforeSend: function (jqXHR) {
        	var token = localStorage.token;
        	console.log(token);
        	jqXHR.setRequestHeader('X-authorization', token)
        },*/
        success: function(response, textStatus) {
            console.log('succes', response)
        },
        error: function(error) {
            console.log('error', error)
        },
        complete: function(jqxhr, textStatus) {
            console.log(textStatus);
            if(textStatus == 'error'){

            }
        }
    })
}

$(document).ready(cargarPagina);