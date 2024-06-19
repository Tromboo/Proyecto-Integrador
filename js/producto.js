document.addEventListener('DOMContentLoaded', () => {

    let queryString = location.search;
    let urlParams = new URLSearchParams(queryString);
    let productId = urlParams.get('id');

    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                document.querySelector('#productName').textContent = data.title;
                document.querySelector('#productImage').src = data.image;
                document.querySelector('#productImage').alt = data.title;
                document.querySelector('#productDescription').textContent = data.description;
                document.querySelector('#productPrice').textContent = `Precio: $${data.price}`;
                document.querySelector('#productCategory').textContent = data.category;
                document.querySelector('#productCategory').href = `./category.html?category=${data.category}`;
            
                document.querySelector('#addToCart').addEventListener('click', () => {
                    addToCart(data.id);
                });
            })
            .catch(error => console.error('El error es: ', error));
    }
    
    // agregar al carrito
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}
});

