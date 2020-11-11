var mensajeError="Error de comunicación con el servidor; revisar dirección";

var imgBase64="";

function analizarImagen(direccion, imagen){
    $.xmlrpc({
        url: 'http://'+direccion+'/nucleo',
        methodName: 'ejemplo',
        params: [imagen],
        success: function(response, status, jqXHR) { 
            console.log(response);
            alert(response);
        },
        error: function(jqXHR, status, error) {
            console.log("Error: " +error);
            console.log("Status: "+status);
            console.log("jqXHR: " +jqXHR);
            alert(mensajeError);
            alert("Error: " +error);
            alert("Status: "+status);
            alert("jqXHR: " +jqXHR);
        }
    });
}