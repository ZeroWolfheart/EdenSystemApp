var imgBase64="";

function analizarImagen(direccion, imagen){
    $("#cargando").show()
    arrImg = imagen.split(",");
    $.xmlrpc({
        url: 'http://'+direccion+'/nucleo',
        methodName: 'ejemplo',
        params: [arrImg[1]],
        success: function(response, status, jqXHR) {
            $("#cargando").hide();
            $("#respuesta").attr("src","data:image/jpg;base64,"+response[0]);
            $("#respondiendo").show();
        },
        error: function(jqXHR, status, error) {
            $("#cargando").hide();
            alert("Lo siento, se produjó un error al comunicarse con el serrvidor: " +error);
        }
    });
}