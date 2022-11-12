let saldo = 50000;
let saldoGeneral = document.querySelector("#saldo-general");

let usuarios = [
  {
    user: "josesosa",
    pass: "12345",
    saldo: 4000000,
  },
  {
    user: "lennysusana",
    pass: "54321",
    saldo: 3000000,
  },
  {
    user: "misas_mouse",
    pass: "2468",
    saldo: 2500000,
  },
  {
    user: "XiomiGuzman",
    pass: "2468",
    saldo: 2300000,
  },
  {
    user: "NataMafla",
    pass: "2468",
    saldo: 1500000,
  },
];

const expresionRegular = {
  usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  cuenta:  /^\d{11}$/
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

function calcularSaldo(valor, saldo) {
  return saldo - valor;
}

botonRetirar.addEventListener("click", () => {
  // reducirElementos();
  // accionTitulo.textContent = ('Usted seleccionó RETIRAR DINERO')
  acciones.classList.remove("invisible");
  document
    .querySelector("#boton-retirar p")
    .classList.add("text-decoration-underline");
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
  document.querySelectorAll("p").value=""
});

const btnRetirar = document.querySelector("#btn-retirar");
let valorRetirar = document.querySelector("#valor-retirar");
let parrafo = document.querySelector("#parrafo");
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
  parrafo.innerHTML = "";
  valorRetirar = document.querySelector("#valor-retirar");
  if (usuarios[1].saldo < valorRetirar.value) {
    parrafo.innerHTML = "Saldo insuficiente";
  } else if (valorRetirar.value < 20000) {
    parrafo.innerHTML = "Cantidad mínima requerida de $ 20000";
  } else if (valorRetirar.value.length == 0) {
    parrafo.innerHTML = "Operación inválida";
  } else {
    saldoNuevo = usuarios[1].saldo - valorRetirar.value;
    usuarios[1].saldo = saldoNuevo;
    saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    agregarRetiro();
    valorRetirar.value = "";
    parrafo.innerHTML = "Retiro exitoso";
  }
});

botonTransferir.addEventListener("click", () => {
  // reducirElementos();
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
  document.querySelectorAll("p").value=""
});
const btnTransferir = document.querySelector("#btn-transferir");
let valorTransferir;
let parrafoTransferir = document.querySelector("#error-transferir");
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
  const formularioTransferir=document.querySelector("#form-transferir")

  parrafoTransferir.innerHTML = "";
  valorTransferir = document.querySelector("#monto");
  if (!expresionRegular.nombre.test(transferirNombre.value)) {
    parrafoTransferir.innerHTML = "Nombre inválido";
  } else if (!expresionRegular.correo.test(transferirCorreo.value)) {
    parrafoTransferir.innerHTML = "Correo inválido";
  } else if (!expresionRegular.cuenta.test(transferirCuenta.value)) {
    parrafoTransferir.innerHTML = "Número de cuenta inválido";
  } else if (usuarios[1].saldo < valorTransferir.value) {
    parrafoTransferir.innerHTML = "Saldo insuficiente";
    console.log("Saldo insuficiente");
  } else if (valorTransferir.value <1000) {
    parrafoTransferir.innerHTML = "Monto inválido, ingresar valor mayor a 1000";
    console.log("Operacion invalida");
  } 
  else {
    saldoNuevo = usuarios[1].saldo - parseFloat(valorTransferir.value);
    usuarios[1].saldo = saldoNuevo;
    saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    parrafoTransferir.innerHTML = "Operacion Exitosa";
    agregarTransferencia();
    formularioTransferir.reset()
  }
});

botonConsultar.addEventListener("click", (e) => {
  // e.preventDefault();
  // reducirElementos();
  // accionTitulo.textContent = ('Usted seleccionó CONSULTAR SALDO');
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
  document.querySelectorAll('p').value=""
});
botonConsignar.addEventListener("click", () => {
  // reducirElementos();
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
  document.querySelectorAll("p").value=""
});

const btnConsignar = document.querySelector("#btn-consignar");
let valorConsignar;
let parrafoConsignar = document.querySelector("#error-consignar");
// let parrafo = document.querySelector("#parrafo")
btnConsignar.addEventListener("click", () => {
  parrafoConsignar.innerHTML = "";
  valorConsignar = document.querySelector("#valor-cosignar");
  if (valorConsignar.value < 1000) {
    parrafoConsignar.innerHTML = "Consignación mínima de $ 1000";
  } else {
    saldoNuevo = parseFloat(valorConsignar.value) + usuarios[1].saldo;
    usuarios[1].saldo = saldoNuevo;
    saldoGeneral.value = usuarios[1].saldo;
    console.log(saldoGeneral.value);
    parrafoConsignar.innerHTML = "Consignación exitosa";
    valorConsignar.value = "";
  }
});
