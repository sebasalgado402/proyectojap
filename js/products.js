const ORDER_ASC_BY_PRICE = "AZ";
const ORDER_DESC_BY_PRICE = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;



function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}


function sortAndShowProducts(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentProductsArray = categoriesArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    listadeProductos();
}

function listadeProductos() {
    
    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductsArray.length ; i++) {
        let elementos = currentProductsArray[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(elementos.cost) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(elementos.cost) <= maxCount))) {
        htmlContentToAppend += `
        
        <div class="col-md-6">
        <a href="product-info.html" class="card mb-6 shadow-sm custom-card">
        
        <img src="`+elementos.imgSrc+`" alt="` + elementos.description + `" class="bd-placeholder-img card-img-top">
        <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">` + elementos.name + `</h4>
                    <small class="col-3 text-muted">` + elementos.soldCount + ` artículos</small>
                <small class="col-3 text-muted">` + elementos.cost + ` ` + elementos.currency + `</small>
                    
                   
                </div>
                <p style="height: 70px;" class="mb-1">` + elementos.description + `</p>
                
            </div>
        </a>
    </div>
        `

        document.getElementById("productCarga").innerHTML = htmlContentToAppend;
    }
}
}

function irAlArticulo(){
    window.location= "product-info.html";
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data;
            sortAndShowProducts(ORDER_ASC_BY_PRICE, currentProductsArray);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        listadeProductos();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        listadeProductos();
    });
});


