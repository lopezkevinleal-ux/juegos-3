const botonesColor = document.querySelectorAll(".colorSimon");

const rondaTexto = document.getElementById("rondaSimon");
const mensaje = document.getElementById("mensajeSimon");
const btnIniciar = document.getElementById("btnIniciarSimon");

let secuencia = [];
let secuenciaUsuario = [];
let bloqueado = true;

function generarPaso() {
    const nuevoColor = Math.floor(
        Math.random() * botonesColor.length
    );

    secuencia.push(nuevoColor);
}

function encenderBoton(indiceColor) {
    const boton = botonesColor[indiceColor];

    boton.classList.add("activo");

    setTimeout(function () {
        boton.classList.remove("activo");
    }, 400);
}

function reproducirSecuencia() {
    bloqueado = true;
    secuenciaUsuario = [];
    rondaTexto.textContent = secuencia.length;

    let indice = 0;

    const intervalo = setInterval(function () {
        encenderBoton(secuencia[indice]);
        indice = indice + 1;

        if (indice === secuencia.length) {
            clearInterval(intervalo);

            setTimeout(function () {
                bloqueado = false;
            }, 500);
        }
    }, 700);
}