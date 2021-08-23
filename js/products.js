//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
   
    
    showSpinner();
    
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            productosCargar = resultObj.data;
            listadeProductos(productosCargar);
            hideSpinner();
        }
    });
});



function listadeProductos(productosCargar) {

    let htmlContentToAppend = "";
    for (let i = 0; i < productosCargar.length ; i++) {
        let elementos = productosCargar[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + elementos.imgSrc + `" alt="` + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <h4 class="mb-1">`+ elementos.name + `</h4>
                    <small class="text-muted">` + elementos.description + `</small> <br>
                    <small class="text-muted">` + elementos.cost + ` ` + elementos.currency + `</small>
                </div>
                <p>`+elementos.soldCount+` artículos vendidos</p>
            </div>
        </div>
        `

        document.getElementById("productCarga").innerHTML = htmlContentToAppend;
    }
}

