var app = {
	inicio: function(){
		this.inciaFastClick();
		this.iniciaElementos();
	},

	inciaFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaElementos: function(){
        var campoDir = document.querySelector("#sAddress");

        //Botones de accion
		var buttonAction = document.querySelector('#button-action');
		buttonAction.addEventListener('click', function(){
			app.cargarFoto(Camera.PictureSourceType.CAMERA);
		});

		var buttonGalery = document.querySelector("#button-galery");
		buttonGalery.addEventListener('click', function(){
			app.cargarFoto(Camera.PictureSourceType.SAVEDPHOTOALBUM);
        });
        
        var buttonAnalizar = document.querySelector('#button-analizar');
        buttonAnalizar.addEventListener('click',function(){
            analizarImagen(campoDir.value, imgBase64);
        });
	},

	cargarFoto: function(pictureSourceType){
		var opciones = {
			quality: 50,
			sourceType: pictureSourceType,
			destinationType: Camera.DestinationType.FILE_URI,
			correctOrientation: true
		};
		navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
	},

	fotoTomada: function(imageURI){
		var image = document.createElement('img');
		image.onload = function(){
			app.pintarFoto(image);
		}
		image.src = imageURI;
	},

	pintarFoto: function(img){
		var canvas = document.querySelector("#foto");
		var context = canvas.getContext('2d');
		canvas.width = img.width;
		canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        imgBase64 = canvas.toDataURL('image/jpeg', 1.0);
	},

	errorAlTomarFoto: function(message){
		console.log("Falló al tomar la foto o toma cancelada " + message);
	}
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		app.inicio();
	}, false);
}