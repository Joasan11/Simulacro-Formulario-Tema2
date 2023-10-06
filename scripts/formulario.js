//Joaquín Sánchez Miravalles
//https://github.com/Joasan11/Simulacro-Formulario-Tema2

document.getElementById("Registro").addEventListener("click", function (event) {

    const nombre = document.getElementById("Nombre").value.trim();
    const apellidos = document.getElementById("Apellidos").value.trim();
    const email = document.getElementById("Email").value.trim();
    const contrasena = document.getElementById("Contraseña").value.trim();

    if (nombre != "" && apellidos != "" && email != "" && contrasena.length >= 8) {
        alert("Te has registrado correctamente");
        //Borramos los campos si todo es correcto
        document.getElementById("Nombre").value = "";
        document.getElementById("Apellidos").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Contraseña").value = "";
    }
    else if (nombre === "") {
        alert("El nombre no puede estar vacio");
    }
    else if (apellidos === "") {
        alert("El apellido no puede estar vacio");
    }
    else if (email === "") {
        alert("El email no puede estar vacio");
    }
    else if (contrasena.length < 8) {
        alert("La contraseña necesita tener al menos 8 caracteres");
    }
});