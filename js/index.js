fetch ('https://fakestoreapi.com/products')
    .then(function (res) {
        return res .json();
    })
    .then(function (data) {
    
        console.log(data);


//Accesorio


let arrayDeProductos = data;
let divSeccion = document.querySelector('.subContainer');
let accesorios = [];


    
console.log(arrayDeProductos);

    for (let i = 4; i < 8; i++) {
            accesorios += `<div>
                        <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}" class="imagenProducto">
                        <h4>${arrayDeProductos[i].title}</h4>
                        <p>${arrayDeProductos[i].description}</p>
                        <p>Precio: $${arrayDeProductos[i].price}</p>
                        <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                        </div>`

                      
                
    }     

        divSeccion.innerHTML = accesorios;

  


    let divElectronica = document.querySelector('.subContainerElectronica');
    let electronica = "";
        
    console.log(arrayDeProductos);
    
        for (let i = 9; i < 13; i++) {
                electronica += `<div>
                            <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}" class="imagenProducto">
                            <h4>${arrayDeProductos[i].title}</h4>
                            <p>${arrayDeProductos[i].description}</p>
                            <p>Precio: $${arrayDeProductos[i].price}</p>
                            <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                            </div>`
        }     
    
            divElectronica.innerHTML = electronica;

        })
        .catch(function (error) {
            console.error(error);
        });
