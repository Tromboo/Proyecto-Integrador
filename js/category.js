document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
            .then(data => {
                const productsContainer = document.querySelector('#products');
                productsContainer.innerHTML = '';

                let productsHTML = '';
                for (let i = 0; i < data.length; i++) {
                    const product = data[i];
                    productsHTML += `
                        <div class="product">
                            <img src="${product.image}" alt="${product.title}">
                            <h2>${product.title}</h2>
                            <p>${product.description}</p>
                            <p>Precio: $${product.price}</p>
                            <a href="./producto.html?id=${product.id}">Ver más</a>
                        </div>
                    `;
                }
                productsContainer.innerHTML = productsHTML;
            })
            .catch(error => console.error('Error:', error));
    }
});
