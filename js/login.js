//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


});
//guarda el elemento con esa id en la variable
let txtNombre = document.getElementById('txtNombre');
let txtPassword = document.getElementById('txtPassword');

function guardar(txtNombre, txtPassword) {

    if (txtNombre.value == "" || txtPassword.value == "") { //Chequea que el dato recibido no esté vacío. 
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.

        verErrores(txtNombre, txtPassword);

    } else {
        localStorage.setItem("usuario", txtNombre.value); //setItem almacena el dato en la posición "usuario"
        localStorage.setItem("password", txtPassword.value); // Almaceno la contraseña
        redireccionar();
        //location.href="index.html";

        //getItem obtiene el dato almacenado en la posición "usuario"
    }
}


function redireccionar() {
    window.location = "index.html"
}

function verErrores(user, passwd) {
    let elementoContra = document.getElementById('errorPassword');
    let elementoNombre = document.getElementById('errorNombre');
    if (user.value == '') {
        elementoNombre.innerHTML = "Debe ingresar un nombre";
    } else {
        elementoNombre.style.display = "none";
    }
    if (passwd.value == '') {

        elementoContra.innerHTML = "Debe ingresar una contraseña";
    }
    else {
        elementoContra.style.display = "none";
    }
}

document.getElementById('txtNombre').addEventListener('focus', function () {
    let elementoNombre = document.getElementById('errorNombre');
    elementoNombre.style.display = "none";
});
document.getElementById('txtPassword').addEventListener('focus', function () {
    let elementoContra = document.getElementById('errorPassword');
    elementoContra.style.display = "none";
});






