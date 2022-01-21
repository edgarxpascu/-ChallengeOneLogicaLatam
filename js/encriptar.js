var botonEncriptar = document.querySelector("#boton-encriptar");

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById("salida").value = ""

    var texto = document.getElementById("entrada").value;
    var errores = validaciones(texto);

    if (errores.length > 0) {
        document.getElementById("salida").value = "";
        exhibirMensajesErrores(errores);
        return;
    }

    encriptar(texto);

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});


function encriptar(texto) {
    for (var i = 0; i < vocales.length; i++) {
        texto = texto.replaceAll(vocales[i], i);
    }
    for (var i = 0; i < clave.length; i++) {
        texto = texto.replaceAll(i,clave[i]);
    }
    salida.value = texto;
}