fetch ('https://fakestoreapi.com/products')
    .then(function (res) {
        return res .json();
    })
    .then(function (data) {
        let arrayDeProductos = data;
        console.log(data);


//Accesorio



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
    

//ropa hombre

let divRopaHombre = document.querySelector('.subContainerRopaH');
        let ropaH = [];
        for (let i = 0; i < 4; i++) {
            ropaH += `<div>
                        <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}" class="imagenProducto">
                        <h4>${arrayDeProductos[i].title}</h4>
                        <p>${arrayDeProductos[i].description}</p>
                        <p>Precio: $${arrayDeProductos[i].price}</p>
                        <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                      </div>`;
        }
        divRopaHombre.innerHTML = ropaH;

})
    .catch(function(e) {
        console.error(e);
    })