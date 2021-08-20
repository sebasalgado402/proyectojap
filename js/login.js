//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    

});

let txtNombre = document.getElementById('txtNombre');
let txtPassword = document.getElementById('txtPassword');

function guardar(txtNombre, txtPassword){  

    if (txtNombre.value==="" || txtPassword.value===""){ //Chequea que el dato recibido no esté vacío. 
    //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        
        verErrores();
    }    else{
    localStorage.setItem("usuario", txtNombre.value); //setItem almacena el dato en la posición "usuario"
    localStorage.setItem("password", txtPassword.value); // Almaceno la contraseña
    sessionStorage.setItem("usuario", txtNombre.value);
    
    debugger;
    
    
    
    
    //location.href="index.html";
    
    //getItem obtiene el dato almacenado en la posición "usuario"
   
    }
}


function redireccionar(){
    let user = document.getElementById('txtNombre');
    let passwd = document.getElementById('txtPassword');
    
    window.location="index.html"
}

function verErrores(){
    if ((user.value == '') && (passwd.value == '')){    
        let elementoNombre = document.getElementById('errorNombre');
        elementoNombre.innerHTML = "Debe ingresar un nombre";
        let elementoContra = document.getElementById('errorPassword');
        elementoContra.innerHTML = "Debe ingresar una contraseña"; 
    }else{
        elementoNombre.style.display = "none";
        elementoContra.style.display = "none";
    }
}






