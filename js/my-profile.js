
miPerfil = window.localStorage;



function guardarDatos() {
    const obje = { name: "aa", edad: "aa", email: "a", tel: "" };
    const myJSON = JSON.stringify(obje);
    
    miPerfil.setItem('perfil', myJSON);

    var obj = miPerfil.getItem('perfil');
    var objetoPerfil = JSON.parse(obj);

    objetoPerfil.name = document.getElementById('txtNombreCompleto').value;
    objetoPerfil.edad = document.getElementById('txtEdad').value;
    objetoPerfil.email = document.getElementById('txtEmail').value;
    objetoPerfil.tel = document.getElementById('txtContacto').value;
    obj = JSON.stringify(objetoPerfil);
    miPerfil.setItem('perfil', obj);

}





function habilitarInputs() {
    document.getElementById("txtNombreCompleto").disabled = false;
    document.getElementById("txtEdad").disabled = false;
    document.getElementById("txtEmail").disabled = false;
    document.getElementById("txtContacto").disabled = false;
    document.getElementById("btnGuardar").disabled = false;
    document.getElementById("btnModificar").disabled = true;
}
function deshabilitarInputs() {
    document.getElementById("txtNombreCompleto").disabled = true;
    document.getElementById("txtEdad").disabled = true;
    document.getElementById("txtEmail").disabled = true;
    document.getElementById("txtContacto").disabled = true;
    document.getElementById("btnGuardar").disabled = true;
    document.getElementById("btnModificar").disabled = false;
}
document.addEventListener("DOMContentLoaded", function (e) {
    
    deshabilitarInputs();
    cargarDatos();
    document.getElementById("aviso").style.visibility = 'hidden';



});

function cargarDatos() {
    var objetoLocal = miPerfil.getItem('perfil');
    
    var JSONperfil = JSON.parse(objetoLocal);
    
    document.getElementById('txtNombreCompleto').value = JSONperfil.name;
    document.getElementById('txtEdad').value = JSONperfil.edad;
    document.getElementById('txtEmail').value = JSONperfil.email;
    document.getElementById('txtContacto').value = JSONperfil.tel;

}

document.getElementById("btnModificar").addEventListener("click", habilitarInputs);
document.getElementById("btnGuardar").addEventListener("click", checkeaInputs);


function checkeaInputs(){
    let nombre = document.getElementById("txtNombreCompleto").value;
    let edad = document.getElementById("txtEdad").value;
    let email = document.getElementById("txtEmail").value;
    let contacto = document.getElementById("txtContacto").value;
    if ((nombre == "")  ||( edad == "") ||( email == "") || (contacto == "") ){
        document.getElementById("aviso").style.color='red';
        document.getElementById("aviso").innerHTML = "   *Asegúrese de completar todos los campos"
        document.getElementById("aviso").style.visibility = 'visible';
    }else{
        guardarDatos();
        document.getElementById("aviso").style.color='green';
        document.getElementById("aviso").innerHTML = "   *Los datos fueron actualizados correctamente"
        document.getElementById("aviso").style.visibility = 'visible';
        deshabilitarInputs();
    }
}

