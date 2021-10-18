//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
arrayProduct = [];

document.addEventListener("DOMContentLoaded", function (e) {

});

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayProduct = resultObj.data.articles;
            console.log(arrayProduct)
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
        <input id="numCantidad"type="number" onkeyup="cambiarCantidad()" value="`+ contenido.count + `">
          
        </td>
        <td id="tabCostUnitario">`+ contenido.unitCost + ` ` + contenido.currency + `</td>
        
        `

        document.getElementById('cargarTabla').innerHTML = htmlContentToAppend;
    }
    var asiganda = document.getElementById('numCantidad');
    
    var subTotal = precio * asiganda.value;
    var total = subTotal * 0.22 + subTotal;
    document.getElementById('lisubTotal').innerHTML ="Sub Total: " +subTotal;
    document.getElementById('liTotal').innerHTML ="Total: " +total;


}

function cambiarCantidad() {
    var asiganda = document.getElementById('numCantidad');
    //var costo = Number(arrayProduct.unitCost)
    for (let i = 0; i < arrayProduct.length; i++) {
        var costo = arrayProduct[i].unitCost;
        
    }
    
    subTotal = asiganda.value*costo;
    document.getElementById('lisubTotal').innerHTML ="Sub Total: " +subTotal;
    total = subTotal*0.22 + subTotal;
    document.getElementById('liTotal').innerHTML ="Total: " +total;

}

