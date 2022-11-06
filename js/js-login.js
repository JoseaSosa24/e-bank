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
    }
];

const expresionRegular = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    user: false,
    pass: false,
};

const usuario = document.querySelector('#usuario');
const contrasena = document.querySelector('#contrasena');

function mensajeError(mensaje) {
    const mensajeError = document.querySelector("#mensaje-error");
    mensajeError.classList.add('text-danger', 'fw-bold')
    mensajeError.textContent = mensaje;
}

const validarFormulario = (event) => {
    event.preventDefault();
    mensajeError("");
    // event.preventDefault();
    switch (event.target.name) {
        case "usuario":
            validarExpresiones(event, expresionRegular.usuario, usuario, "user");
            // console.log(nom);
            break;
        case "contrasena":
            validarExpresiones(event, expresionRegular.password, contrasena, "pass");
            break;
        default:
            break;
    }
};

function mostrandoCorrecto(campo) {
    campo.classList.remove("bg-danger");
    campo.classList.add("border", "border-4", "border-success");

}

function mostrandoIncorrecto(campo) {
    campo.classList.remove("border", "border-4", "border-success");
    campo.classList.add("bg-danger");


}

function validarExpresiones(event, expresion, campo, nombreCampo) {
    if (expresion.test(event.target.value)) {//Validando la expresión regular
        console.log("Validación exitosa");
        mostrandoCorrecto(campo);
        campos[nombreCampo] = true;

    } else {
        console.log("Validación errada");
        mostrandoIncorrecto(campo);
        campos[nombreCampo] = false;

    }
}

const inputs = document.querySelectorAll("#login-form input");
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

var posicionUsuario;

function validarUsuario(inputUsuario) {
    for (let i = 0; i < usuarios.length; i++) {
        if (inputUsuario == usuarios[i].user) {
            console.log('usuario correcto')
            console.log(inputUsuario + "=" + usuarios[i].user);
            posicionUsuario = i;
            return true;
        }
        console.log('usuario incorrecto')
        console.log(inputUsuario + "=" + usuarios[i].user);
        return false;
    }
}

function validarContrasena(inputContrasena) {
    if (inputContrasena == usuarios[posicionUsuario].pass) {
        console.log('Contraseña correcta')
        console.log(inputUsuario + "=" + usuarios[i].pass);
        return true;
    }
    console.log('contraseña incorrecto')
    console.log(inputUsuario + "=" + usuarios[i].pass);
    return false;

}

function validarCredenciales() {
    let sw=false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuario.value === usuarios[i].user && contrasena.value === usuarios[i].pass) {
            // console.log("Usuario: " + usuario.value + "=" + usuarios[i].user + "Pass:" + contrasena.value + "=" + usuarios[i].pass);
            return sw=true;
        } else {
            // console.log("Usuario: " + usuario.value + "!=" + usuarios[i].user + " Pass:" + contrasena.value + "!=" + usuarios[i].pass);
        }
    }
    
    return sw;
}

const btnIniciar = document.querySelector('#btn-iniciar');
const formulario = document.querySelector('#login-form');
btnIniciar.addEventListener('click', (event) => {

    if (campos.user && campos.pass) {
        event.preventDefault();
        if (validarCredenciales()==true) {
            formulario.action = ('./../vista-principal/cajero.html')
            formulario.submit();
            formulario.reset();
        } else {
            event.preventDefault();
            console.log(validarCredenciales());
            console.log('Usuario y contraseña no encontradas');
            formulario.reset()
            mensajeError("Usuario o Contraseña incorrectos");
            mostrandoIncorrecto(usuario);
            mostrandoIncorrecto(contrasena);
        }

    } else {
        event.preventDefault();
        mensajeError("Campos vacios o incorrectos");
    }

})

