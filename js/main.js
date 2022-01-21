var entrada = document.getElementById('entrada');
var salida = document.getElementById("salida");
var texto = document.getElementById("entrada").value;

//Reglas de encriptación
const vocales = ["a", "e", "i", "o", "u"];
const clave = ["ai", "enter", "imes", "ober", "ufat"];
const caracteresEspeciales = /[`@#$%^&*()_+\-=\[\]{}'"\\|<>\/~^\d]/;
const acentos = /[áéíóú]/;
const mayusculas = /[ÑÁÉÍÓÚ\A-Z]/;

entrada.onkeyup = function(event) {
    if (this.value.length === 0) {
        document.getElementById("salida").value = "";
        var mensajesErrores = document.querySelector("#mensajes-errores");
        mensajesErrores.innerHTML = "";
    }
}

function validaciones(texto) {
    var errores = [];
    var caracteresEspecialesNoValidos = validarCaracteresEspeciales(texto);
    var mayusculasEncontradas = validarMinusculas(texto);
    var minusculasAcentuadas = validarAcentos(texto);
    
    if (caracteresEspecialesNoValidos.length > 0) {
        for (var i=0; i < caracteresEspecialesNoValidos.length; i++) {
            errores.push("Se ha encontrado el siguiente carácter especial: " + caracteresEspecialesNoValidos[i]);
        }
    }

    if (mayusculasEncontradas.length > 0) {
        for (var i=0; i < mayusculasEncontradas.length; i++) {
            errores.push("Se ha encontrado la siguiente mayúscula: " + mayusculasEncontradas[i]);
        }
    }

    if (minusculasAcentuadas.length > 0) {
        for (var i=0; i < minusculasAcentuadas.length; i++) {
            errores.push("Se ha encontrado la siguiente minúscula acentuada: " + minusculasAcentuadas[i]);
        }
    }
    
    return errores;
}

function validarCaracteresEspeciales(texto) {
    var caracteresEspecialesNoValidos= [];
    if(caracteresEspeciales.test(texto)){

        for (var i=0; i < texto.length; i++) {
            str = texto.charAt(i)
            if (str.match(caracteresEspeciales)) {
                caracteresEspecialesNoValidos.push(str);
            }
        }
    }
    return caracteresEspecialesNoValidos;
}

function validarMinusculas(texto) {
    var mayusculasEncontradas= [];
    if(mayusculas.test(texto)){

        for (var i=0; i < texto.length; i++) {
            str = texto.charAt(i)
            if (str.match(mayusculas)) {
                mayusculasEncontradas.push(str);
            }
        }
    }
    return mayusculasEncontradas;
}

function validarAcentos(texto) {
    var minusculasAcentuadas = [];
    if(acentos.test(texto)){

        for (var i=0; i < texto.length; i++) {
            str = texto.charAt(i)
            if (str.match(acentos)) {
                minusculasAcentuadas.push(str);
            }
        }
    }
    return minusculasAcentuadas;
}

function exhibirMensajesErrores(errores) {
    var ul = document.querySelector("#mensajes-errores")
    ul.innerHTML = "";
    alert("El texto contiene caracteres no validos");
    errores.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}


var botonCopiar = document.querySelector("#boton-copiar");

botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    var copiar = document.getElementById("salida").value;
    if (!navigator.clipboard){
        document.execCommand("copy")
    }else{
        navigator.clipboard.writeText(copiar)
    }    
});