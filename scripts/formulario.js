//Joaquín Sánchez Miravalles
//

document.getElementById("Registro").addEventListener("click", function (event) {

    const nombre = document.getElementById("Nombre").value.trim();
    const apellidos = document.getElementById("Apellidos").value.trim();
    const email = document.getElementById("Email").value.trim();
    const contrasena = document.getElementById("Contraseña").value.trim();

    if (nombre != "" && apellidos != "" && email != "" && contrasena != "") {
        alert("Te has registrado correctamente");
    } 
});