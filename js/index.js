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
            accesorios += `<div class = "productos">
                        <img src="${arrayDeProductos[i].image}" alt="" class="imagenProducto">
                        <h3>${arrayDeProductos[i].title}</h3>
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
            ropaH += `<div class = "productos">
                        <img src="${arrayDeProductos[i].image}" alt="${arrayDeProductos[i].title}" class="imagenProducto">
                        <h3>${arrayDeProductos[i].title}</h3>
                        <p>${arrayDeProductos[i].description}</p>
                        <p>Precio: $${arrayDeProductos[i].price}</p>
                        <a href="./producto.html?id=${arrayDeProductos[i].id}">Ver más</a>
                      </div>`;
        }
        divRopaHombre.innerHTML = ropaH;
  


    let divElectronica = document.querySelector('.subContainerElectronica');
    let electronica = "";
        
    console.log(arrayDeProductos);
    
        for (let i = 9; i < 13; i++) {
                electronica += `<div class = "productos">
                            <img src="${arrayDeProductos[i].image}" alt="" class="imagenProducto">
                            <h3>${arrayDeProductos[i].title}</h3>
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
