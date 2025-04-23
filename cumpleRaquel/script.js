// variables login
let raquelEnc = false;

function login() {
    // usuarios: adrian y raquel
    // contraseñas: 07012000 y 23042001
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    if (user === 'raquel' && pass === '23042001') {
        window.location.href = "paginaInicial.html";
    }
    else if(user === 'raquel'){
        alerta('Fallo','Contraseña incorrecta. <br><br> Vamos que estas muy cerca ya jejjee.','Cerrar');
        raquelEnc = true;
    }
    else {
      alerta('Fallo','Usuario y contraseña incorrectos. <br><br> Vamos que se que puedes jeje.','Cerrar');
    }
}

function pistasLogin(){
    if(raquelEnc)
        alerta('Pistas login',
            '8 digitos // tal dia como hoy hace 24 años <br><br>' + 
            'Ya casi estas jeje',
            'Cerrar pista');
    else          
        alerta('Pistas login',
            'Pagina para el amor de mi vida, por lo que solo una persona puede entrar <br><br>' + 
            'Vamos que se que eres capaz jeje',
            'Cerrar pista');

}

function comenzar(){
    document.getElementById('index').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
}

function alerta(titulo = 'Alerta', mensaje, boton = 'cerrar'){
    document.getElementById('alert-title').textContent = titulo;
    document.getElementById('alert-message').innerHTML = mensaje;
    document.getElementById('alert-button').textContent = boton;
    document.getElementById('custom-alert').style.display = 'flex';
}

function cerrarAlerta() {
    document.getElementById('custom-alert').style.display = 'none';
}

function verificarCodigo() {
    const codigoCorrecto = "2303"; 
    const entrada = document.getElementById("codigo").value;
  
    if (entrada === codigoCorrecto) {
        alerta('Codigo correcto', 'Enhorabuena ahora puedes ver tus regalos :)', 'Continuar')
        const div = document.getElementById('botones-ocultos')
        document.getElementById("div-codigo").style.display = "none";
        document.getElementById("botones-ocultos").style.display = "block";
    } 
    else {
        alerta('Codigo incorrecto', 'Parece que todavia no has conseguido ganarme', 'Continuar')
    }
}
  
function mostrarDiv(idDiv) {
    const divs = document.querySelectorAll(".div-regalos");
    divs.forEach(div => div.style.display = "none");

    const divAMostrar = document.getElementById(idDiv);
    divAMostrar.style.display = "block";
}
  
function mostrarDiv2(idDiv) {
    const divs = document.querySelectorAll(".div-regalo");
    divs.forEach(div => div.style.display = "none");

    const divAMostrar = document.getElementById(idDiv);
    divAMostrar.style.display = "block";
} 

function mostrarDiv3(idDiv) {
    const divs = document.querySelectorAll(".div-regaloNormal");
    divs.forEach(div => div.style.display = "none");

    const divAMostrar = document.getElementById(idDiv);
    divAMostrar.style.display = "block";
} 

function comprobarAdivinanza(respuestaCorrecta, idInput, idSolucion) {
    const respuestaUsuario = document.getElementById(idInput).value.trim().toLowerCase();

    if (respuestaUsuario === respuestaCorrecta.toLowerCase()) {
        alerta('Correcto', '¡Muy bien! Ahora puedes ver tu regalo por fin jeje 💖', 'Continuar');
        document.getElementById(idSolucion).hidden = false;
    } else {
        alerta('Incorrecto', 'Sé que lo puedes hacer mucho mejor que eso 😘', 'Intentar de nuevo');
    }
}

function salir(){
    document.getElementById("botones-ocultos").style.display = "none";
    document.getElementById("regaloVenecia").style.display = "none";
    document.getElementById("regaloNormal").style.display = "none";
    document.getElementById("div-codigo").style.display = "block";

}