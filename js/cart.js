document.addEventListener('DOMContentLoaded', function() {
    const productosContainer = document.querySelector('#productosContainer');
    const finalizarCompraButton = document.querySelector('#finalizarCompra');



    function mostrarProductos(productos) {
        if (productos.length === 0) {
            productosContainer.innerHTML = '<p>Su carrito está vacío</p>';
        } else {
            let html = '';
            productos.forEach(producto => {
                html += `
                    <div>
                        <h3>${producto.nombre}</h3>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <p>${producto.descripcion}<br>Precio: ${producto.precio}$</p>
                    </div>
                `;
            });
            productosContainer.innerHTML = html;
        }
    }

    function finalizarCompra() {
        localStorage.removeItem('carrito');
        alert('Gracias por su compra');
        window.location.href = './index.html';
    }

    function cargarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carrito.length === 0) {
            mostrarProductos([]);
        } else {
            //https://www.youtube.com/watch?v=O3Ht2uejzfM//
            const productosEnCarrito = productos.filter(producto => carrito.includes(producto.id));
            mostrarProductos(productosEnCarrito);
        }
    }

    cargarCarrito();

    finalizarCompraButton.addEventListener('click', finalizarCompra);
});