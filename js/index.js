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
                        <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}">
                        <h4>${arrayDeProductos[i].title}</h4>
                        <p>${arrayDeProductos[i].description}</p>
                        <p>Precio: $${arrayDeProductos[i].price}</p>
                        <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                        </div>`
    }     

        divSeccion.innerHTML = accesorios;
    })
    .catch(function (error) {
        console.error('Error fetching products:', error);
    });

