//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
arrayProduct = [];
mensaje = [];



document.addEventListener("DOMContentLoaded", function (e) {
    cambiarCantidad();
});


document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_BUY_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
          mensaje = resultObj.data.msg;
          
      }
  });

});
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayProduct = resultObj.data.articles;
            
            mostrarContenido(arrayProduct);

        }
    });

});

function mostrarContenido(lista) {

    let htmlContentToAppend = "";

    for (let i = 0; i < lista.length; i++) {
        contenido = lista[i];
        var precio = lista[i].unitCost;

        htmlContentToAppend += `
        
        <td><a>Eliminar</a></td>
        
        <td id="imgTabla"><img src="`+ contenido.src + `"> </td>
        <td id="tabNombre">`+ contenido.name + `</td>
        <td>
        <input class="col-4" id="numCantidad"type="text" onkeyup="cambiarCantidad()" value="`+ contenido.count + `">
          
        </td>
        
        <td id="tabCostUnitario">`+ contenido.unitCost + ` ` + contenido.currency + `</td>
        
        `

        document.getElementById('cargarTabla').innerHTML = htmlContentToAppend;
    }
    var asiganda = document.getElementById('numCantidad');
    
    var subTotal = precio * asiganda.value;
    costoporcentaje = subTotal*(porcentajeEnvio);
    var total = (subTotal * 0.22) + subTotal;
    var total2 = total + costoporcentaje;
    
    document.getElementById('lisubTotal').innerHTML ="Sub Total: " +subTotal;
    
    document.getElementById('liTotal').innerHTML ="Total: " +total2;
    
    


}



function cambiarCantidad() {
    var asiganda = document.getElementById('numCantidad');
    //var costo = Number(arrayProduct.unitCost)
    for (let i = 0; i < arrayProduct.length; i++) {
        var costo = arrayProduct[i].unitCost;
        
    }
    
    subTotal = asiganda.value*costo;
    costoporcentaje = subTotal*(porcentajeEnvio);
    console.log(costoporcentaje);
    document.getElementById('lisubTotal').innerHTML ="Sub Total: " +subTotal;
    total = (subTotal*0.22 + subTotal)+ costoporcentaje;
    document.getElementById('liTotal').innerHTML ="Total: " +total;
    document.getElementById('recibeTotal').innerHTML = total;
}








var costoEnvio;
let premium = document.getElementById('rPremium').checked;
let express = document.getElementById('rExpress').checked;
let standard = document.getElementById('rStandard').checked;
var totalRecibido = document.getElementById('recibeTotal').value
var porcentajeEnvio=0.05;

function porcentaje15(){
  porcentajeEnvio = 0.15
  
}
function porcentaje7(){
  porcentajeEnvio = 0.07
  
}
function porcentaje5(){
  porcentajeEnvio = 0.05
  
}


function modalBancario(){
  var htmlcontent="";

    htmlcontent +=`
    <div class="container">
                
    <div class="modal fade" id="myModalA" role="dialog">
      <div class="modal-dialog">
      
       
        <div class="modal-content">
          
          <div class="modal-body">
          <blockquote>
            <h3>Transferencia Bancaria</h3>
            </blockquote>
          </div>

          <form class="container">
    
          <div class="form-group">
            <label for="Nombre">Nombre Completo</label>
            <input type="Nombre" class="form-control" id="m1Nombre" placeholder="Ingrese Nombre">
            
          </div>
          <div class="form-group">
            <label for="Documento de identidad">Documento de identidad</label>
            <input type="Documento de identidad" class="form-control" id="m1Documentodeidentidad" placeholder="Ingrese Documento de identidad">
            
          </div>
          <div class="form-group">
            <label for="Numero de Cuenta">Numero de Cuenta</label>
            <input type="Numero de Cuenta" class="form-control" id="m1NumerodeCuenta" placeholder="Ingrese Numero de Cuenta">
            
          </div>
          <div class="form-group">
            <label for="Contraseña">Contraseña</label>
            <input type="password" class="form-control" id="m1Contraseña" placeholder="Ingrese Contraseña">
            
          </div>
          
          <blockquote>
          <label id="m1lbError" style="color: red; visibility: hidden;" class="container" >Asegúrese de completar todos los datos*</label>
    
          
        </form>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="validarDatosBancario()">Enviar</button>
      </div>


    `
document.getElementById('modalBancario').innerHTML = htmlcontent;
}
function modalCredito(){
  var htmlcontent="";

  htmlcontent +=`
  

<div class="container">
                
    <div class="modal fade" id="myModalB" role="dialog">
      <div class="modal-dialog">
      
       
        <div class="modal-content">
          
          <div class="modal-body">
          <blockquote>
            <h3>Tarjeta de Crédito</h3>
            </blockquote>
          </div>

          <form class="container">
    
          <div class="form-group">
            <label for="Nombre">Nombre Completo</label>
            <input type="Nombre" class="form-control" id="m2Nombre" placeholder="Ingrese Nombre">
            
          </div>
          <div class="form-group">
            <label for="Documento de identidad">Documento de identidad</label>
            <input type="Documento de identidad" class="form-control" id="m2Documentodeidentidad" placeholder="Ingrese Documento de identidad">
            
          </div>
          <div class="form-group">
            <label for="Numero de Tarjeta">Numero de Tarjeta</label>
            <input type="Numero de Tarjeta" class="form-control" id="m2NumerodeTarjeta" placeholder="Ingrese Numero de Tarjeta">
            
          </div>
          <div class="form-group">
            <label for="Numero de seguridad">Numero de seguridad</label>
            <input type="Numero de seguridad" class="form-control" id="m2Numerodeseguridad" placeholder="Ingrese Numero de seguridad">
            
          </div>
          <div class="form-group">
            <label for="Fecha de vencimiento">Fecha de vencimiento</label>
            <input type="Fecha de vencimiento" class="form-control" id="m2FechadeVencimiento" placeholder="Ingrese Fecha de vencimiento">
            
          </div>
          <label id="m2lbError" style="color: red; visibility: hidden;" class="container" >Asegúrese de completar todos los datos*</label>
    
          <blockquote>
        
          
        </form>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="validarDatosCredito()" >Enviar</button>
      </div>

  `
document.getElementById('modalCredito').innerHTML = htmlcontent;
}
var form1 = false
function validarDatosenvio(){
  let nombre = document.getElementById('txtNombre').value;
  console.log(nombre);
  let pais = document.getElementById('txtPaís').value
  let direccion = document.getElementById('txtDireccion').value
  let contacto = document.getElementById('txtContacto').value
 
  if ((nombre == "") || (pais=="") || (direccion == "") || (contacto=="")){
    document.getElementById("lbError").style.visibility = "visible";
  }else{
    document.getElementById("lbError").style.visibility = "hidden";
    modalCompra();
  }

}

function validarDatosBancario(){
  let nombre = document.getElementById('m1Nombre').value;
  let m1Documentodeidentidad = document.getElementById('m1Documentodeidentidad').value
  let m1NumerodeCuenta = document.getElementById('m1NumerodeCuenta').value
  let m1Contraseña = document.getElementById('m1Contraseña').value
 
  if ((nombre == "") || (m1Documentodeidentidad=="") || (m1NumerodeCuenta == "") || (m1Contraseña=="")){
    document.getElementById("m1lbError").style.visibility = "visible";
  }else{
    document.getElementById("m1lbError").style.color = "green"
    document.getElementById("m1lbError").innerHTML = "Datos cargados correctamente , puede cerrar esta ventana"
    document.getElementById("m1lbError").style.visibility = "visible";
    document.getElementById('btnFinalizar').disabled = false;
    
  }

}

function validarDatosCredito(){
  let m2Nombre = document.getElementById('m2Nombre').value;
  
  let m2Documentodeidentidad = document.getElementById('m2Documentodeidentidad').value
  let m2NumerodeTarjeta = document.getElementById('m2NumerodeTarjeta').value
  let m2Numerodeseguridad = document.getElementById('m2Numerodeseguridad').value
  let m2FechadeVencimiento = document.getElementById('m2FechadeVencimiento').value
 
  if ((m2Nombre == "") || (m2Documentodeidentidad=="") || (m2NumerodeTarjeta == "") || (m2Numerodeseguridad=="") || (m2FechadeVencimiento=="")){
    document.getElementById("m2lbError").style.visibility = "visible";
  }else{
    document.getElementById("m2lbError").style.color = "green"
    document.getElementById("m2lbError").innerHTML = "Datos cargados correctamente , puede cerrar esta ventana"
    document.getElementById("m2lbError").style.visibility = "visible";
    document.getElementById('btnFinalizar').disabled = false;
  }

}



function modalCompra(){
  var htmlcontent="";

    htmlcontent +=`
        <p>`+mensaje+`</p>
       
    `
document.getElementById('recibeMensaje').innerHTML = htmlcontent;
}

document.getElementById("btnFinalizar").addEventListener("click", validarDatosenvio);

document.getElementById("rPremium").addEventListener("click", porcentaje15);
document.getElementById("rPremium").addEventListener("click", cambiarCantidad);

document.getElementById("rExpress").addEventListener("click", porcentaje7);
document.getElementById("rExpress").addEventListener("click", cambiarCantidad);

document.getElementById("rStandard").addEventListener("click", porcentaje5);
document.getElementById("rStandard").addEventListener("click", cambiarCantidad);
