var botonDesencriptar = document.querySelector("#boton-desencriptar");

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();

    var texto = document.getElementById("entrada").value;
    var errores = validaciones(texto);
    
    if (errores.length > 0) {
        document.getElementById("salida").value = "";
        exhibirMensajesErrores(errores);
        return;
    }

    desencriptar(texto);

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});


function desencriptar(texto) {
    for (var i = 0; i < clave.length; i++) {
        texto = texto.replaceAll(clave[i], i);
    }
    for (var i = 0; i < clave.length; i++) {
        texto = texto.replaceAll(i,vocales[i]);
    }
    salida.value = texto;
}