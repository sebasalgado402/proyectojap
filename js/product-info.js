var infoProduct = [];
var arrComentarios = [];

function mostrarDescripcion(lista) {

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
            <div>
              <img src="img/prod1_1.jpg" class="d-block width=" 150" height="150" alt="...">
            </div>
            <img src="img/prod1_2.jpg" class="d-block width=" 150" height="150" alt="...">
            <img src="img/prod1_3.jpg" class="d-block width=" 150" height="150" alt="...">
            <img src="img/prod1_4.jpg" class="d-block width=" 150" height="150" alt="...">
          </div>
        </div>
      </div>
    </div>
        `
        document.getElementById('mostrarContenido').innerHTML = htmlContentToAppend;
    }
}
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
          <div>
            <img src="img/prod1_1.jpg" class="d-block width=" 150" height="150" alt="...">
          </div>
          <img src="img/prod1_2.jpg" class="d-block width=" 150" height="150" alt="...">
          <img src="img/prod1_3.jpg" class="d-block width=" 150" height="150" alt="...">
          <img src="img/prod1_4.jpg" class="d-block width=" 150" height="150" alt="...">
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

  let htmlContentToAppend = [];

  for (let i = 0; i < lista.length; i++) {
      contenido = lista[i];
      
      htmlContentToAppend += `
    
    <div class="container">
    <div class="card">
  <ul class="list-group list-group-flush">
  <p><b>`+ contenido.user + `</b> - ` + contenido.dateTime + `</p>
  <p>`+ contenido.description + `</p>
  </ul>
</div>
</div>
   
      `
      document.getElementById('mostrarComentarios').innerHTML = htmlContentToAppend;
  }
}


function subirInfo(){
  let nombre = localStorage.getItem('usuario');
  let comentarios = document.getElementById('textComentario').value;
  let today = new Date();
  let fecha= today.getFullYear()  + '-' +(today.getMonth()+1)+'-'+today.getDate() ;
  let hora = today.getHours() + ':' + today.getMinutes() + ':'+today.getSeconds();
  let fechaHora = fecha + '   -   ' +hora;
  let htmlContentToAppend = "";
  htmlContentToAppend += `
  
  <div class="container">
  <div class="card">
<ul class="list-group list-group-flush">
<p><b>`+ nombre + `</b> - ` + fechaHora + `</p>
<p>`+ comentarios + `</p>
</ul>
</div>
</div>

  `
  document.getElementById("mostrarComentarios").innerHTML += htmlContentToAppend;
}

function verificarComentario(){
  let comentarios = document.getElementById('textComentario').value;
  let select = document.getElementById('selectItem').value;
  
  if (select != '---' && comentarios != ''){
    subirInfo();
  }else{
    
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
          console.log(arrComentarios);
          mostrarComentarios(arrComentarios);
      }
  });
  
});
