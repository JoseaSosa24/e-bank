export const usuarios = [
    {
        nombre: "Administrador",
        apellido: "",
        user: "Adm1234",
        pass: "12345",
        saldo: 4000000
    },
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

export function validarCredenciales() {
    let sw = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios.value === usuarios[i].user && contrasena.value === usuarios[i].pass) {
            // console.log("Usuario: " + usuario.value + "=" + usuarios[i].user + "Pass:" + contrasena.value + "=" + usuarios[i].pass);
            return sw = true;
        } else {
            // console.log("Usuario: " + usuario.value + "!=" + usuarios[i].user + " Pass:" + contrasena.value + "!=" + usuarios[i].pass);
        }
    }
    return sw;
}