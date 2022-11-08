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

const btnRetirar = document.querySelector('#btn-retirar');
const btnTransferir = document.querySelector('#btn-transferir');
const btnConsultar = document.querySelector('#btn-consultar');
const btnConsignar = document.querySelector('#btn-consignar');