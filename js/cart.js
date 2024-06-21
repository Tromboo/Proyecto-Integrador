document.addEventListener('DOMContentLoaded', function() {
    const productosContainer = document.querySelector('#productos')
    const finalizarCompraButton = document.querySelector('#finalizarCompra');
    const texto = document.querySelector('#productos');



    function finalizarCompra() {
        localStorage.removeItem('cart');
        alert('Gracias por su compra');
        window.location.href = './index.html';
    }

    function cargarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('cart')) || [];
        if (carrito.length === 0) {
            texto.innerHTML = '<h4>Su carrito está vacío</h4>';
            finalizarCompraButton.style.display = 'none';
        } else {
            productosContainer.innerHTML = '';
            carrito.forEach(id => {
                fetch(`https://fakestoreapi.com/products/${id}`)
                    .then(response => response.json())
                    .then(producto => {
                        let productoDiv = document.createElement('div');
                        productoDiv.innerHTML = `
                            <img src="${producto.image}" alt="${producto.title}" class="imagenProducto">
                            <h4>${producto.title}</h4>
                            <p>${producto.description}</p>
                            <p>Precio: $${producto.price}</p>
                        `;
                        productosContainer.appendChild(productoDiv);
                    })
            });
            finalizarCompraButton.style.display = 'block';
        }
    }

    cargarCarrito();

    finalizarCompraButton.addEventListener('click', finalizarCompra);
});