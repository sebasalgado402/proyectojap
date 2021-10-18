var infoProduct = [];
var arrComentarios = [];

let star= `<span class="fa fa-star"></span>`
let starChecked= `<span class="fa fa-star checked"></span>`


function mostrarContenido(lista) {
  
  let htmlContentToAppend = "";

  for (let i = 0; i < lista.length; i++) {
      contenido = lista[i];
      
      htmlContentToAppend += `
      <div class="container mt-5">
  <h2 class="list-group-item">`+ contenido.name + `</h2>
  <div class="list-group-item list-group-item-action">
    <p><b>Precio</b></p>
    <p>`+ contenido.currency + ` ` + contenido.cost + `</p>
    <p><b>Descripción</b></p>
    <p>`+ contenido.description + `</p>
    <p><b>Categoría</b></p>
    <a href="category-info.html">`+ contenido.category + `</a>
    <p><b>Cantidad de vendidos</b></p>
    <p>`+ contenido.soldCount + `</p>
    <p><b>Imagenes Ilustrativas</b></p>
    <div class="container mt-5 list-group-item">
      <div class="container">
        <div class="row text-center text-lg-left pt-2">
          <div class="row">
           
          <img src="img/prod1.jpg" class=" img-thumbnail w-25 " alt="...">
          
          <img src="img/prod1_2.jpg" class=" img-thumbnail w-25 " alt="...">
          <img src="img/prod1_3.jpg" class=" img-thumbnail w-25 "alt="...">
          <img src="img/prod1_4.jpg" class=" img-thumbnail w-25 "alt="...">
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3><b>Comentarios</b></h3>
      `
      document.getElementById('mostrarContenido').innerHTML = htmlContentToAppend;
  }
}

function mostrarComentarios(lista) {

  let htmlContentToAppend = "";
  let star= `<span class="fa fa-star"></span>`
  let starChecked= `<span class="fa fa-star checked"></span>`
  
  for (let i = 0; i < lista.length; i++) {
    let contenido = lista[i];
    let starPintadas = starChecked.repeat(contenido.score);
    let starNegras = star.repeat(5 - contenido.score);
     
      
      htmlContentToAppend += `
    
      <div class="card container">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <small class="text-right">Calificación: `+ starPintadas + starNegras+`</small>
          <p><b>`+ contenido.user + `</b> - ` + contenido.dateTime + ` </p>
          <p>`+ contenido.description + `</p>
  
        </ul>
      </div>
    </div>
      `
      document.getElementById('mostrarComentarios').innerHTML = htmlContentToAppend;
  }
}
var contador;
function calificar(item){
  contador = item.id[0];
  let nombre = item.id.substring();
  
  for (i = 0 ; i < 5 ; i++){
    if(i<contador){
     var numeroEstrella = document.getElementById((i+1)+'star').style.color="orange";
     
     
      
    }else{
      document.getElementById((i+1)+'star').style.color="black";
    }
  }
}

function subirInfo(){
  let estrellas = document.getElementById('star');
  let starPintadas = starChecked.repeat(contador);
 
  let starNegras = star.repeat(5 - contador);
   
  let nombre = localStorage.getItem('usuario');
  let comentarios = document.getElementById('textComentario').value;
  let today = new Date();
  let fecha= today.getFullYear()  + '-' +(today.getMonth()+1)+'-'+today.getDate() ;
  let hora = today.getHours() + ':' + today.getMinutes() + ':'+today.getSeconds();
  let fechaHora = fecha + '   -   ' +hora;
  let htmlContentToAppend = "";
  htmlContentToAppend += `
  
  <div class="card container">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <small class="text-right">Calificación: `+ starPintadas + starNegras+`</small>
          <p><b>`+ nombre + `</b> - ` + fechaHora + ` </p>
          <p>`+ comentarios + `</p>
  
        </ul>
      </div>
    </div>
  `
  document.getElementById("mostrarComentarios").innerHTML += htmlContentToAppend;
}

function verificarComentario(){
  let comentarios = document.getElementById('textComentario').value;
  let comm = comentarios.trim();
  if (comm != '' && contador != 0){
    subirInfo();
    let error = document.getElementById('textComentario').style.borderColor="black";
    let mensaje = document.getElementById('msgError').style.color="black";
    let mensajeError = document.getElementById('msgError').style.display="none";
    let borrarComentario = document.getElementById('textComentario').value = "";
    let borrarError = document.getElementById('msgError').value = "";
  }else{
    let error = document.getElementById('textComentario').style.borderColor="red";
    let mensaje = document.getElementById('msgError').style.color="red";
    let mensajeError = document.getElementById('msgError');
    mensajeError.innerHTML ="Debe ingresar un comentario";
  }
}






//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            infoProduct.push(resultObj.data);
            
            mostrarContenido(infoProduct);
            
        }
    });
    
});
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
          arrComentarios = resultObj.data;
          mostrarComentarios(arrComentarios);
         
      }
  });
  
});
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCTS_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
        arrProdRelacionados=resultObj.data;
        
        mostrarProdRelacionados(arrProdRelacionados);
      }
  });
  
});
var arrProdRelacionados = {} ;


function mostrarProdRelacionados(lista) {

  let htmlContentToAppend = "";

  for (let i = 0; i < lista.length; i++) {
      let contenido = lista[i];
      
      if (i == 1 || i == 3){
        
      htmlContentToAppend += `
      
          <div class="container mt-2">
          <div class="row">
          
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
            <img class="bd-placeholder-img card-img-top"  src="`+contenido.imgSrc+`">
            <div class="card-body">
            <h3 class="m-3">`+contenido.name+`</h3>
            <p class="card-text">`+contenido.description+`</p>
            </div>
            </a>
         </div>
         </div>
        
      `
      }
  };
  document.getElementById('mostrarProdRelacionados').innerHTML = htmlContentToAppend;
}