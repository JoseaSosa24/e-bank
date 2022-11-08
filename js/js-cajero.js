const usuarios = [
    {
        user: "josesosa",
        pass: "12345",
        saldo: 4000000
    },
    {
        user: "lennysusana",
        pass: "54321",
        saldo: 3000000
    },
    {
        user: "misas_mouse",
        pass: "2468",
        saldo: 2500000
    },
    {
        user: "XiomiGuzman",
        pass: "2468",
        saldo: 2300000
    },
    {
        user: "NataMafla",
        pass: "2468",
        saldo: 1500000
    }
];

const expresionRegular = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const acciones = document.querySelector('#transacciones');
// const accionTitulo = document.querySelector('#titulo h3');
const accionRetirar = document.querySelector('#retirar');
const accionTransferir = document.querySelector('#transferir');
const accionConsultar = document.querySelector('#consultar');
const accionConsignar = document.querySelector('#consignar');

// ocultarAcciones();

function ocultarAcciones() {
    // acciones.classList.remove('reducir-elementos');
    // accionTitulo.textContent = ("");
    accionRetirar.classList.add('invisible')
    accionTransferir.classList.add('invisible');
    accionConsultar.classList.add('invisible');
    accionConsignar.classList.add('invisible');
}

const botonRetirar = document.querySelector('#boton-retirar');
const botonTransferir = document.querySelector('#boton-transferir');
const botonConsultar = document.querySelector('#boton-consultar');
const botonConsignar = document.querySelector('#boton-consignar');

botonRetirar.addEventListener('click', () => {
    // reducirElementos();
    // accionTitulo.textContent = ('Usted seleccionó RETIRAR DINERO')
    document.querySelector('#boton-retirar p').classList.add('text-decoration-underline');
    document.querySelector('#boton-transferir p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-consultar p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-consignar p').classList.remove('text-decoration-underline');
    accionRetirar.classList.remove('invisible')
    accionTransferir.classList.add('invisible');
    accionConsultar.classList.add('invisible');
    accionConsignar.classList.add('invisible');

});
botonTransferir.addEventListener('click', () => {
    // reducirElementos();
    document.querySelector('#boton-transferir p').classList.add('text-decoration-underline');
    document.querySelector('#boton-retirar p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-consultar p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-consignar p').classList.remove('text-decoration-underline');
    // accionTitulo.textContent = ('Usted seleccionó TRANSFERIR DINERO')
    accionRetirar.classList.add('invisible')
    accionTransferir.classList.remove('invisible');
    accionConsultar.classList.add('invisible');
    accionConsignar.classList.add('invisible');

});
botonConsultar.addEventListener('click', () => {
    // reducirElementos();
    // accionTitulo.textContent = ('Usted seleccionó CONSULTAR SALDO');
    document.querySelector('#boton-consultar p').classList.add('text-decoration-underline');
    document.querySelector('#boton-transferir p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-retirar p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-consignar p').classList.remove('text-decoration-underline');
    accionRetirar.classList.add('invisible')
    accionTransferir.classList.add('invisible');
    accionConsultar.classList.remove('invisible');
    accionConsignar.classList.add('invisible');

});
botonConsignar.addEventListener('click', () => {
    // reducirElementos();
    document.querySelector('#boton-consignar p').classList.add('text-decoration-underline');
    document.querySelector('#boton-consultar p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-transferir p').classList.remove('text-decoration-underline');
    document.querySelector('#boton-retirar p').classList.remove('text-decoration-underline');
    // accionTitulo.textContent = ('Usted seleccionó CONSIGNAR DINERO');
    accionRetirar.classList.add('invisible')
    accionTransferir.classList.add('invisible');
    accionConsultar.classList.add('invisible');
    accionConsignar.classList.remove('invisible');

});