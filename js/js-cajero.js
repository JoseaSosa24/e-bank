// window.onload = ()=> {
//   document.querySelector('#img-cargando').src='img/logo_ebank.png';
//   document.querySelector('#cargando').textContent='Cargando...'
//   setTimeout(() => {
//     // document.querySelector('#contenedor').classList.add('invisible');
//     // document.querySelector('main').classList.remove('invisible');
//     $('#onload').fadeOut();
//     $('#principal').removeClass('invisible');
//     $('#contenedor').addClass('invisible');
//   }, 3000);

// }


window.onload = () => {
  document.querySelector('#img-cargando').src = '../img/logo_ebank.png';
  mensajeSalida.textContent = 'Cargando';
  setTimeout(() => {
    $('#principal').removeClass('invisible');
    $('#contenedor').addClass('invisible');
  }, 200);

  // ('#onload').fadeOut();
}

let saldoGeneral = document.querySelector("#saldo-general");

import { usuarios } from "./main.js";

let usuarioRamdon = 5;

const expresionRegular = {
  usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  cuenta: /^\d{11}$/
};

const acciones = document.querySelector("#transacciones");
// const accionTitulo = document.querySelector('#titulo h3');

ocultarAcciones();

function ocultarAcciones() {
  acciones.classList.add("invisible");
}

function mostrarAccion(texto) {
  const botonesTextos = document.querySelectorAll('#botones-transacciones p');
  const accion = document.querySelectorAll('#transacciones .transaccion');
  for (let i = 0; i < accion.length; i++) {
    if (botonesTextos[i].textContent === texto) {
      console.log("verdadero " + botonesTextos[i].textContent + " " + texto);
      botonesTextos[i].classList.add("text-decoration-underline");
      accion[i].classList.remove('invisible');
    } else {
      console.log("falso" + botonesTextos[i].textContent + " " + texto);
      accion[i].classList.add('invisible');
      botonesTextos[i].classList.remove("text-decoration-underline");
    }
  }
}

function limpiarAlertas() {
  const parrafos = document.querySelectorAll("#transacciones p");
  parrafos.forEach((parrafo) => {
    parrafo.innerHTML = "";
  });

  const imgs = document.querySelectorAll("#transacciones img");
  imgs.forEach((img) => {
    img.src = "";
  })
}

const textoBotonTransacciones = document.querySelectorAll(".botones-transacciones p");
let textoAccion;
let alertaMensaje;
let iconoAlerta

const botonesTransacciones = document.querySelector('#botones-transacciones');
botonesTransacciones.addEventListener('click', (e) => {
  if (e.target.classList.contains('b-retirar')) {
    console.log('Entró Retirar');
    acciones.classList.remove("invisible");
    limpiarAlertas();
    document.querySelector("#boton-retirar a").click();
    mostrarAccion("Retirar dinero");
  } else if (e.target.classList.contains('b-transferir')) {
    limpiarAlertas();
    acciones.classList.remove("invisible");
    document.querySelector("#boton-transferir a").click();
    textoAccion = document.querySelector("#boton-transferir p");
    mostrarAccion(textoAccion.textContent);
  } else if (e.target.classList.contains('b-consultar')) {
    limpiarAlertas();
    acciones.classList.remove("invisible");
    document.querySelector("#boton-consultar a").click();
    saldoGeneral.value = parseFloat(usuarios[usuarioRamdon].saldo);
    textoAccion = document.querySelector("#boton-consultar p");
    mostrarAccion(textoAccion.textContent);
  } else if (e.target.classList.contains('b-consignar')) {
    limpiarAlertas();
    acciones.classList.remove("invisible");
    document.querySelector("#boton-consignar a").click();
    textoAccion = document.querySelector("#boton-consignar p");
    mostrarAccion(textoAccion.textContent);
  }

});

const btnRetirar = document.querySelector("#btn-retirar");

// let mensajeAlerta = document.querySelector("#alerta");
let saldoNuevo = 0;
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

function agregarRetiro() {
  const trRetiro = document.createElement("tr");
  const tdFecha = document.createElement("td");
  const tdValorRetiro = document.createElement("td");
  // const tbody=document.createElement("tbody");
  const table = document.querySelector("#tabla-retirar tbody");
  tdFecha.textContent = hoy.toLocaleDateString();
  tdValorRetiro.textContent = document.querySelector("#valor-retirar").value;
  table.appendChild(trRetiro);
  // tbody.appendChild(trRetiro)
  trRetiro.appendChild(tdFecha);
  trRetiro.appendChild(tdValorRetiro);
}


btnRetirar.addEventListener("click", () => {
  const valorRetirar = document.querySelector("#valor-retirar");
  const alertaMensaje = document.querySelector("#alerta-retirar");
  const alertaNuevoSaldo = document.querySelector('#retirar #alerta-nuevo-saldo')
  iconoAlerta = document.querySelector("#retirar-mensaje img");
  alertaMensaje.innerHTML = "";
  if (usuarios[usuarioRamdon].saldo < valorRetirar.value) {
    mostrarCampoIncorrecto(alertaMensaje, "Saldo insuficiente",
      iconoAlerta, "../img/icon/incorrecto.png");
  } else if (valorRetirar.value <= 0) {
    mostrarCampoIncorrecto(alertaMensaje, "Operación inválida",
      iconoAlerta, "../img/icon/incorrecto.png");
  } else if (valorRetirar.value < 10000) {
    mostrarCampoIncorrecto(alertaMensaje, "Retiro mínimo de $ 10000",
      iconoAlerta, "../img/icon/incorrecto.png");
  } else {
    saldoNuevo = usuarios[usuarioRamdon].saldo - valorRetirar.value;
    usuarios[usuarioRamdon].saldo = saldoNuevo;
    alertaNuevoSaldo.textContent='Su nuevo saldo es de: '+saldoNuevo+" $"
    alertaNuevoSaldo.classList.remove('invisible');
    // saldoGeneral.value = usuarios[usuarioRamdon].saldo;
    console.log(saldoGeneral.value);
    agregarRetiro();
    valorRetirar.value = "";
    alertaMensaje.innerHTML = "Retiro exitoso";
    iconoAlerta.src = "./../img/icon/correcto.png";
    setTimeout(() => {
      alertaMensaje.innerHTML = "";
      iconoAlerta.src = "";
      alertaNuevoSaldo.classList.add('invisible')
    }, 5200);
  }
});

const btnTransferir = document.querySelector("#btn-transferir");
let valorTransferir;
// let parrafoTransferir = document.querySelector("#alerta-transferir");
// let parrafo = document.querySelector("#parrafo")
function agregarTransferencia() {
  const tr = document.createElement("tr");
  const tdNombre = document.createElement("td");
  const tdCorreo = document.createElement("td");
  const tdCuenta = document.createElement("td");
  const tdMonto = document.createElement("td");
  const tdFecha = document.createElement("td");
  const tablaTransferencia = document.querySelector("#tabla-transferir tbody");
  tdNombre.textContent = document.querySelector("#nombre").value;
  tdCorreo.textContent = document.querySelector("#correo").value;
  tdCuenta.textContent = document.querySelector("#cuenta").value;
  tdMonto.textContent = document.querySelector("#monto").value;
  // tdFecha.textContent=document.querySelector('#fecha').value
  tdFecha.textContent = hoy.toLocaleDateString();
  tablaTransferencia.appendChild(tr);
  tr.appendChild(tdNombre);
  tr.appendChild(tdCorreo);
  tr.appendChild(tdCuenta);
  tr.appendChild(tdMonto);
  tr.appendChild(tdFecha);
}

function mostrarCampoIncorrecto(alerta, mensaje, icono, img) {
  icono.src = img;
  alerta.innerHTML = mensaje;
}

btnTransferir.addEventListener("click", (event) => {
  const transferirNombre = document.querySelector("#nombre");
  const transferirCorreo = document.querySelector("#correo");
  const transferirCuenta = document.querySelector("#cuenta");
  const formularioTransferir = document.querySelector("#form-transferir");
  const alertaNuevoSaldo = document.querySelector('#transferir #alerta-nuevo-saldo');
  alertaMensaje = document.querySelector('#alerta-transferir');
  iconoAlerta = document.querySelector('#transferir-mensaje img');
  alertaMensaje.innerHTML = "";
  valorTransferir = document.querySelector("#monto");
  if (!expresionRegular.nombre.test(transferirNombre.value)) {
    mostrarCampoIncorrecto(alertaMensaje, "Nombre inválido",
      iconoAlerta, "../img/icon/incorrecto.png");
    // transferirNombre.classList.add("bg-danger","bg-opacity-75");
  } else if (!expresionRegular.correo.test(transferirCorreo.value)) {
    mostrarCampoIncorrecto(alertaMensaje, "Correo inválido",
      iconoAlerta, "../img/icon/incorrecto.png");
    // transferirCorreo.classList.add("bg-danger","bg-opacity-75");
  } else if (!expresionRegular.cuenta.test(transferirCuenta.value)) {
    mostrarCampoIncorrecto(alertaMensaje, "Número de cuenta inválido",
      iconoAlerta, "../img/icon/incorrecto.png");
    // transferirCuenta.classList.add("bg-danger","bg-opacity-75");
  } else if (usuarios[usuarioRamdon].saldo < valorTransferir.value) {
    mostrarCampoIncorrecto(alertaMensaje, "Saldo insuficiente",
      iconoAlerta, "../img/icon/incorrecto.png");
    // valorTransferir.classList.add("bg-danger","bg-opacity-75");
  } else if (valorTransferir.value <= 0) {
    mostrarCampoIncorrecto(alertaMensaje, "Monto inválido",
      iconoAlerta, "../img/icon/incorrecto.png");
    // valorTransferir.classList.add("bg-danger","bg-opacity-75");
  } else if (valorTransferir.value < 1000) {
    mostrarCampoIncorrecto(alertaMensaje, "Transferencia mínima de $ 1000",
      iconoAlerta, "../img/icon/incorrecto.png");
    // valorTransferir.classList.add("bg-danger","bg-opacity-75");
  }
  else {
    saldoNuevo = usuarios[usuarioRamdon].saldo - parseFloat(valorTransferir.value);
    usuarios[usuarioRamdon].saldo = saldoNuevo;
    // saldoGeneral.value = usuarios[usuarioRamdon].saldo;
    console.log(saldoGeneral.value);
    alertaNuevoSaldo.textContent='Su nuevo saldo es de: '+saldoNuevo+" $"
    alertaNuevoSaldo.classList.remove('invisible');
    agregarTransferencia();
    iconoAlerta.src = "../img/icon/correcto.png";
    alertaMensaje.innerHTML = "Operación Exitosa";
    formularioTransferir.reset()
    setTimeout(() => {
      alertaMensaje.innerHTML = "";
      iconoAlerta.src = "";
      alertaNuevoSaldo.classList.add('invisible');
    }, 5200);
  }

});

const btnConsignar = document.querySelector("#btn-consignar");
btnConsignar.addEventListener("click", () => {
  alertaMensaje = document.querySelector("#alerta-consignar");
  iconoAlerta = document.querySelector("#consignar-mensaje img");
  const valorConsignar = document.querySelector("#valor-cosignar");
  const alertaNuevoSaldo = document.querySelector('#consignar #alerta-nuevo-saldo');
  alertaMensaje.innerHTML = "";

  if (valorConsignar.value <= 0) {
    mostrarCampoIncorrecto(alertaMensaje, "Operación inválida",
      iconoAlerta, "../img/icon/incorrecto.png");
  } else if (valorConsignar.value < 1000) {
    mostrarCampoIncorrecto(alertaMensaje, "Consignación mínima de $ 1000",
      iconoAlerta, "../img/icon/incorrecto.png");
  } else {
    saldoNuevo = parseFloat(valorConsignar.value) + usuarios[usuarioRamdon].saldo;
    usuarios[usuarioRamdon].saldo = saldoNuevo;
    // saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    alertaNuevoSaldo.textContent='Su nuevo saldo es de: '+saldoNuevo+" $"
    alertaNuevoSaldo.classList.remove('invisible');
    alertaMensaje.innerHTML = "Consignación exitosa";
    iconoAlerta.src = "./../img/icon/correcto.png";
    valorConsignar.value = "";
    setTimeout(() => {
      alertaMensaje.innerHTML = "";
      iconoAlerta.src = "";
      alertaNuevoSaldo.classList.add('invisible');
    }, 5200);
  }
});

const formSalir = document.querySelector('#form-salir')
const btnSalir = document.querySelector('#btn-salir');
const btnCancelar = document.querySelector('#btn-cancelar');
const mensajeSalida = document.querySelector('#cargando');
btnSalir.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#contenedor').classList.remove('invisible');
  btnCancelar.click();
  document.querySelector('main').classList.add('invisible');
  document.querySelector('#img-cargando').src = '../img/logo_ebank.png';
  mensajeSalida.textContent = 'Cerrando Sesión...';
  setTimeout(() => {
    mensajeSalida.textContent = 'Gracias por elegir a E-Bank :)';
    setTimeout(() => {
      mensajeSalida.textContent = '¡Vuelve pronto!';
      setTimeout(() => {
        formSalir.submit();
      }, 1500);

    }, 2000);

  }, 2000);
});