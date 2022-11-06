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


const validarFormulario = (event) => {
    event.preventDefault();
    // mensajeError("");
    // event.preventDefault();
    // mensajeEmergente.textContent = "";
    switch (event.target.name) {
        case "usuario":
            validarExpresiones(event, expresionRegular.usuario,usuario,"user");
            // console.log(nom);
            break;
        case "contrasena":
            validarExpresiones(event, expresionRegular.password,contrasena,"pass");
            break;
        default:
            break;
    }
};

function validarExpresiones(event, expresion,campo, nombreCampo) {
    if (expresion.test(event.target.value)) {//Validando la expresión regular
        console.log("Validación exitosa");
        campo.classList.add("border", "border-4", "border-success");
        campo.classList.remove("bg-danger");
        campos[nombreCampo] = true;

    } else {
        console.log("Validación errada");
        campo.classList.add("bg-danger");
        campo.classList.remove("border", "border-4", "border-success");
        campos[nombreCampo] = false;

    }
}

const inputs = document.querySelectorAll("#login-form input");
inputs.forEach((input) => {
    console.log(input);
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});



