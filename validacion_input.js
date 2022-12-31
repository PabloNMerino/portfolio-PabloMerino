const nombre = document.querySelector(".input-nombre")
const email = document.querySelector(".input-email");
const tema = document.querySelector(".input-tema");
const mensaje = document.querySelector(".input-mensaje");
const formulario = document.querySelector("#formulario");
const boton = document.querySelector(".boton");

/*-------------- Capturamos clases de formulario --------------*/
const errorNombre = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorTema = document.querySelector(".error-tema");
const errorMensaje = document.querySelector(".error-msj");



formulario.addEventListener("submit", event => {
    event.preventDefault();

    let nombreValidado = validarCampo(nombre.value);
    let emailValidado = validarEmail(email.value);
    let temaValidado = validarCampo(tema.value);
    let msjValidado = validarCampo(mensaje.value);

    !nombreValidado ? errorNombre.style.visibility = "visible" : errorNombre.style.visibility = "hidden";

    !emailValidado ? errorEmail.style.visibility = "visible" : errorEmail.style.visibility = "hidden";

    !temaValidado ? errorTema.style.visibility = "visible" : errorTema.style.visibility = "hidden";

    !msjValidado ? errorMensaje.style.visibility = "visible" : errorMensaje.style.visibility = "hidden";

    if( nombreValidado && emailValidado && temaValidado && msjValidado) {
        enviarEmail(event);
    }
})


const validarCampo = nombreForm => {
    const regexNombre = /^\s+$/;
    if( nombreForm == null || nombreForm.length == 0 || /^\s+$/.test(nombreForm)) {
        return false
    }
    else
        return true;
}

const validarEmail = emailForm => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return !(regexEmail.test(emailForm)) ? false : true;
    }

const enviarEmail = (event) => {
    const payload = {
        nombre: nombre.value,
        email: email.value,
        tema: tema.value,
        mensaje: mensaje.value
    }

    const settings = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 
            'Content-type' : 'application/json'
        }
    }

    fetch("https://formsubmit.co/2ae76532751df1bf98a4e0d927121fec", settings)
    .then (response => {console.log("listo")})

    
    }

