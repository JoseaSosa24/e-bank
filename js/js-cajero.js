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

// let saldo = 50000;
let saldoGeneral = document.querySelector("#saldo-general");

// import {devolverNombre } from "./js-login.js";
// import {usuarios } from "./js-login.js";

// document.querySelector('#titulo-bienvenida').textContent="Bienvenido "+devolverNombre;

const usuarios = [
  {
    nombre: "José",
    apellido: "Sosa",
    user: "josesosa",
    pass: "12345",
    saldo: 4000000
  },
  {
    nombre: "Susana",
    apellido: "",
    user: "lennysusana",
    pass: "54321",
    saldo: 3000000
  },
  {
    nombre: "Santiago",
    apellido: "Misas",
    user: "misas_mouse",
    pass: "2468",
    saldo: 2500000
  },
  {
    nombre: "Xiomara",
    apellido: "Guzman",
    user: "XiomiGuzman",
    pass: "2468",
    saldo: 2300000
  },
  {
    nombre: "Natalia",
    apellido: "Mafla",
    user: "NataMafla",
    pass: "2468",
    saldo: 1500000
  },
  {
    nombre: "Juliana",
    apellido: "Rios",
    user: "julirios",
    pass: "abc123",
    saldo: 15000000
  }
];

const expresionRegular = {
  usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  cuenta: /^\d{11}$/
};

const acciones = document.querySelector("#transacciones");
// const accionTitulo = document.querySelector('#titulo h3');
const accionRetirar = document.querySelector("#retirar");
const accionTransferir = document.querySelector("#transferir");
const accionConsultar = document.querySelector("#consultar");
const accionConsignar = document.querySelector("#consignar");

ocultarAcciones();

function ocultarAcciones() {
  acciones.classList.add("invisible");
}



const botonRetirar = document.querySelector("#boton-retirar");
const botonTransferir = document.querySelector("#boton-transferir");
const botonConsultar = document.querySelector("#boton-consultar");
const botonConsignar = document.querySelector("#boton-consignar");


botonRetirar.addEventListener("click", () => {
  // reducirElementos();
  // accionTitulo.textContent = ('Usted seleccionó RETIRAR DINERO')
  acciones.classList.remove("invisible");
  document.querySelector("#boton-retirar p").classList.add("text-decoration-underline");
  document
    .querySelector("#boton-transferir p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-consultar p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-consignar p")
    .classList.remove("text-decoration-underline");
  accionRetirar.classList.remove("invisible");
  accionTransferir.classList.add("invisible");
  accionConsultar.classList.add("invisible");
  accionConsignar.classList.add("invisible");
  document.querySelectorAll("p").value = ""
  document.querySelector("#boton-retirar a").click();
  limpiarAlertas()

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
  const alertaRetirar = document.querySelector("#alerta-retirar");
  const iconoAlerta = document.querySelector("#retirar-mensaje img");
  alertaRetirar.innerHTML = "";
  if (usuarios[1].saldo < valorRetirar.value) {
    iconoAlerta.src = "./../img/icon/incorrecto.png";
    alertaRetirar.innerHTML = "Saldo insuficiente";
  } else if (valorRetirar.value < 10000) {
    iconoAlerta.src = "./../img/icon/incorrecto.png";
    alertaRetirar.innerHTML = "Retiro mínimo de $ 10000";
  } else if (valorRetirar.value.length == 0) {
    alertaRetirar.innerHTML = "Operación inválida";
  } else {
    saldoNuevo = usuarios[1].saldo - valorRetirar.value;
    usuarios[1].saldo = saldoNuevo;
    // saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    agregarRetiro();
    valorRetirar.value = "";
    alertaRetirar.innerHTML = "Retiro exitoso";
    iconoAlerta.src = "./../img/icon/correcto.png";
    setTimeout(() => {
      alertaRetirar.innerHTML = "";
      iconoAlerta.src = "";
    }, 4000);
  }
});

botonTransferir.addEventListener("click", () => {
  document.querySelector("#boton-transferir a").click();
  acciones.classList.remove("invisible");
  document
    .querySelector("#boton-transferir p")
    .classList.add("text-decoration-underline");
  document
    .querySelector("#boton-retirar p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-consultar p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-consignar p")
    .classList.remove("text-decoration-underline");
  // accionTitulo.textContent = ('Usted seleccionó TRANSFERIR DINERO')
  accionRetirar.classList.add("invisible");
  accionTransferir.classList.remove("invisible");
  accionConsultar.classList.add("invisible");
  accionConsignar.classList.add("invisible");
  limpiarAlertas();
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

btnTransferir.addEventListener("click", () => {
  const transferirNombre = document.querySelector("#nombre");
  const transferirCorreo = document.querySelector("#correo");
  const transferirCuenta = document.querySelector("#cuenta");
  const formularioTransferir = document.querySelector("#form-transferir")
  const alertaTransferir = document.querySelector('#alerta-transferir');
  const iconoAlerta = document.querySelector('#transferir-mensaje img');
  alertaTransferir.innerHTML = "";
  valorTransferir = document.querySelector("#monto");
  if (!expresionRegular.nombre.test(transferirNombre.value)) {
    alertaTransferir.innerHTML = "Nombre inválido";
    iconoAlerta.src = "../img/icon/incorrecto.png";
    // transferirNombre.classList.add("bg-danger","bg-opacity-75");
  } else if (!expresionRegular.correo.test(transferirCorreo.value)) {
    iconoAlerta.src = "../img/icon/incorrecto.png";
    alertaTransferir.innerHTML = "Correo inválido";
    // transferirCorreo.classList.add("bg-danger","bg-opacity-75");
  } else if (!expresionRegular.cuenta.test(transferirCuenta.value)) {
    iconoAlerta.src = "../img/icon/incorrecto.png";
    alertaTransferir.innerHTML = "Número de cuenta inválido";
    // transferirCuenta.classList.add("bg-danger","bg-opacity-75");
  } else if (usuarios[1].saldo < valorTransferir.value) {
    iconoAlerta.src = "../img/icon/incorrecto.png";
    alertaTransferir.innerHTML = "Saldo insuficiente";
    // valorTransferir.classList.add("bg-danger","bg-opacity-75");
  } else if (valorTransferir.value < 1000) {
    iconoAlerta.src = "../img/icon/incorrecto.png";
    alertaTransferir.innerHTML = "Monto inválido";
    // valorTransferir.classList.add("bg-danger","bg-opacity-75");
  }
  else {
    saldoNuevo = usuarios[1].saldo - parseFloat(valorTransferir.value);
    usuarios[1].saldo = saldoNuevo;
    saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    agregarTransferencia();
    iconoAlerta.src = "../img/icon/correcto.png";
    alertaTransferir.innerHTML = "Operación Exitosa";
    formularioTransferir.reset()
    setTimeout(() => {
      alertaTransferir.innerHTML = "";
      iconoAlerta.src = "";
    }, 4000);
  }

});

botonConsultar.addEventListener("click", (e) => {
  // e.preventDefault();
  // reducirElementos();
  // accionTitulo.textContent = ('Usted seleccionó CONSULTAR SALDO');
  document.querySelector("#boton-consultar a").click();
  acciones.classList.remove("invisible");
  saldoGeneral.value = parseFloat(usuarios[1].saldo);
  document
    .querySelector("#boton-consultar p")
    .classList.add("text-decoration-underline");
  document
    .querySelector("#boton-transferir p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-retirar p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-consignar p")
    .classList.remove("text-decoration-underline");
  accionRetirar.classList.add("invisible");
  accionTransferir.classList.add("invisible");
  accionConsultar.classList.remove("invisible");
  accionConsignar.classList.add("invisible");
  limpiarAlertas()
});
botonConsignar.addEventListener("click", () => {
  // reducirElementos();
  document.querySelector("#boton-consignar a").click();
  acciones.classList.remove("invisible");
  document
    .querySelector("#boton-consignar p")
    .classList.add("text-decoration-underline");
  document
    .querySelector("#boton-consultar p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-transferir p")
    .classList.remove("text-decoration-underline");
  document
    .querySelector("#boton-retirar p")
    .classList.remove("text-decoration-underline");
  // accionTitulo.textContent = ('Usted seleccionó CONSIGNAR DINERO');
  accionRetirar.classList.add("invisible");
  accionTransferir.classList.add("invisible");
  accionConsultar.classList.add("invisible");
  accionConsignar.classList.remove("invisible");
  limpiarAlertas();
});

const btnConsignar = document.querySelector("#btn-consignar");
btnConsignar.addEventListener("click", () => {
  const alertaConsignar = document.querySelector("#alerta-consignar");
  const iconoAlerta = document.querySelector("#consignar-mensaje img");
  const valorConsignar = document.querySelector("#valor-cosignar");
  alertaConsignar.innerHTML = "";

  if (valorConsignar.value < 1000) {
    alertaConsignar.innerHTML = "Consignación mínima de $ 1000";
    iconoAlerta.src = "./../img/icon/incorrecto.png";
  } else {
    saldoNuevo = parseFloat(valorConsignar.value) + usuarios[1].saldo;
    usuarios[1].saldo = saldoNuevo;
    // saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    alertaConsignar.innerHTML = "Consignación exitosa";
    iconoAlerta.src = "./../img/icon/correcto.png";
    valorConsignar.value = "";
    setTimeout(() => {
      alertaConsignar.innerHTML = "";
      iconoAlerta.src = "";
    }, 4000);
  }
});

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