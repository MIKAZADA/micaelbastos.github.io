document.addEventListener('DOMContentLoaded', () => {
    // Fetch products from the server
    fetchProducts();

    function fetchProducts() {
        fetch('/api/products')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching products:', error));
    }

    function displayProducts(products) {
        const productsSection = document.getElementById('products');
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsSection.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        return card;
    }

    function addToCart(productId) {
        // Implement cart functionality here
    }
});
