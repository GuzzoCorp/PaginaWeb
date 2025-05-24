document.addEventListener('DOMContentLoaded', function() {
    // Base de datos de productos (puedes reemplazar con una API real)
    const products = [
        {
            id: 1,
            name: "DC Court Graffick Rosas",
            price: 199999,
            category: "sneakers",
            image: "assets/products/dc-court-graffick.jpg",
            description: "Las únicas de San Luis"
        },
        // Agregar todos tus productos aquí...
    ];

    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productGrid = document.getElementById('product-grid');

    // Función para renderizar productos
    function renderProducts(filteredProducts) {
        productGrid.innerHTML = '';
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = `product-card ${product.category}`;
            productCard.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toLocaleString('es-AR')}</p>
                    <p class="size">${product.description}</p>
                    <button class="whatsapp-btn" onclick="buyViaWhatsapp('${product.name}', ${product.price}, '${product.image}')">
                        <i class="fab fa-whatsapp"></i> COMPRAR
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Filtrado y búsqueda
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        
        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
            return matchesSearch && matchesFilter;
        });
        
        renderProducts(filtered);
    }

    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    searchBtn.addEventListener('click', filterProducts);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });

    // Cargar todos los productos inicialmente
    renderProducts(products);
});
