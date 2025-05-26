document.addEventListener('DOMContentLoaded', function() {
    // Base de datos de productos ampliada
const products = [
    {
        id: 1,
        name: "Remera Térmica",
        image: "remera-termica.jpeg",
        tags: ["oferta", "hombre", "mujer"]
    },
    {
        id: 2,
        name: "Gorra",
        image: "gorra.jpeg",
        tags: ["oferta", "nuevo", "hombre", "mujer"]
    },
    {
        id: 3,
        name: "Cuellos Lycra Frizada",
        image: "cuellos-lycra-frizada.jpeg",
        tags: ["oferta", "hombre", "mujer"]
    },
    {
        id: 4,
        name: "DC Court Graffick Rosas",
        image: "dc-rosas.jpeg",
        tags: ["ultima-unidad", "hombre", "mujer"]
    },
    {
        id: 5,
        name: "Puma 180",
        image: "puma-180.jpeg",
        tags: ["ultima-unidad", "hombre"]
    },
    {
        id: 6,
        name: "Osiris D3 2001",
        image: "osiris-d3.jpeg",
        tags: ["ultima-unidad", "hombre"]
    },
    {
        id: 7,
        name: "Remera Oversize Negra",
        image: "remera-oversize-negra.jpeg",
        tags: ["mas-vendido", "hombre", "para salir"]
    },
    {
        id: 8,
        name: "Remera Oversize Blanca",
        image: "remera-oversize-blanca.jpeg",
        tags: ["hombre", "para salir"]
    },
    {
        id: 9,
        name: "Buzo Canguro Negro",
        image: "buzo-canguro-negro.jpeg",
        tags: ["mas-vendido", "hombre", "para salir"]
    },
    {
        id: 10,
        name: "Zapatillas Nike Air Max",
        image: "nike-air-max.jpeg",
        tags: ["nuevo", "hombre", "deportivo"]
    },
    {
        id: 11,
        name: "Jeans Rotos Oversize",
        image: "jeans-rotos-oversize.jpeg",
        tags: ["nuevo", "hombre", "para salir"]
    },
    {
        id: 12,
        name: "Campera Denim",
        image: "campera-denim.jpeg",
        tags: ["nuevo", "hombre", "para salir"]
    },
    {
        id: 13,
        name: "Mochila The North Face",
        image: "mochila-the-north-face.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 14,
        name: "Gafas de Sol Ray-Ban",
        image: "gafas-rayban.jpeg",
        tags: ["nuevo", "hombre", "para salir"]
    },
    {
        id: 15,
        name: "Calza One Leg",
        image: "calza-one-leg.jpeg",
        tags: ["nuevo", "mujer", "deportivo"]
    },
    {
        id: 16,
        name: "Calza Larga",
        image: "calza-larga.jpeg",
        tags: ["nuevo", "mujer", "deportivo"]
    },
    {
        id: 17,
        name: "Pelota de Basquet Molten BG4500",
        image: "molten-bg4500.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 18,
        name: "Nike Lebron XXI",
        image: "lebron-xxi.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 19,
        name: "Nike Lebron Witness 7",
        image: "lebron-witness7.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 20,
        name: "Calza Corta Deportiva Mujer",
        image: "calza-corta-mujer.jpeg",
        tags: ["nuevo", "mujer", "deportivo"]
    },
    {
        id: 21,
        name: "Giannis Immortality 4",
        image: "giannis-immortality4.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 22,
        name: "Nike G.T. Cut Academy",
        image: "nike-gt-cut.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 23,
        name: "Jordan Tatum 2",
        image: "jordan-tatum2.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 24,
        name: "Air Jordan XXXVIII",
        image: "air-jordan-38.jpeg",
        tags: ["nuevo", "deportivo", "hombre"]
    },
    {
        id: 25,
        name: "Kobe VIII Protro",
        image: "kobe-viii-protro.jpeg",
        tags: ["nuevo", "coleccionista", "deportivo", "hombre"]
    },
    {
        id: 26,
        name: "iPhone 16",
        image: "iphone-16.jpeg",
        tags: ["nuevo", "para salir"]
    },
    {
        id: 27,
        name: "Producto 27",
        image: "producto-27.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 28,
        name: "Producto 28",
        image: "producto-28.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 29,
        name: "Producto 29",
        image: "producto-29.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 30,
        name: "Producto 30",
        image: "producto-30.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 31,
        name: "Producto 31",
        image: "producto-31.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 32,
        name: "Producto 32",
        image: "producto-32.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 33,
        name: "Producto 33",
        image: "producto-33.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 34,
        name: "Producto 34",
        image: "producto-34.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 35,
        name: "Producto 35",
        image: "producto-35.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 36,
        name: "Producto 36",
        image: "producto-36.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 37,
        name: "Producto 37",
        image: "producto-37.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 38,
        name: "Producto 38",
        image: "producto-38.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 39,
        name: "Producto 39",
        image: "producto-39.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 40,
        name: "Producto 40",
        image: "producto-40.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 41,
        name: "Producto 41",
        image: "producto-41.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 42,
        name: "Producto 42",
        image: "producto-42.jpeg",
        tags: ["nuevo", "hombre"]
    },
    {
        id: 43,
        name: "Producto 43",
        image: "producto-43.jpeg",
        tags: ["nuevo", "mujer"]
    },
    {
        id: 44,
        name: "Producto 44",
        image: "producto-44.jpeg",
        tags: ["nuevo", "hombre"]
    }
];

    // Elementos del DOM
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryFilter = document.getElementById('category-filter');
    const sortSelect = document.getElementById('sort-select');
    const productGrid = document.getElementById('product-grid');
    const resultsCount = document.getElementById('results-count');
    // Función para renderizar productos
    function renderProducts(filteredProducts) {
        productGrid.innerHTML = '';
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = `product-card ${product.category}`;
            
            // Construir etiquetas
            let tagsHTML = '';
            if (product.tags) {
                if (product.tags.includes('oferta')) {
                    tagsHTML += `<span class="tag-discount">${product.discount}% OFF</span>`;
                }
                if (product.tags.includes('nuevo')) {
                    tagsHTML += `<span class="tag-new">NUEVO</span>`;
                }
                if (product.tags.includes('mas-vendido')) {
                    tagsHTML += `<span class="tag-bestseller">MÁS VENDIDO</span>`;
                }
                if (product.tags.includes('ultima-unidad')) {
                    tagsHTML += `<span class="tag-stock">ÚLTIMA UNIDAD</span>`;
                }
                if (product.tags.includes('exclusivo')) {
                    tagsHTML += `<span class="tag-exclusive">EXCLUSIVO</span>`;
                }
                if (product.tags.includes('coleccionista')) {
                    tagsHTML += `<span class="tag-collector">COLECCIONISTA</span>`;
                }
            }

            // Construir precios
            let priceHTML = '';
            if (product.oldPrice) {
                priceHTML = `
                    <div class="price-container">
                        <p class="old-price">$${product.oldPrice.toLocaleString('es-AR')}</p>
                        <p class="price">$${product.price.toLocaleString('es-AR')}</p>
                    </div>
                `;
            } else {
                priceHTML = `<p class="price">$${product.price.toLocaleString('es-AR')}</p>`;
            }

            // Construir talles
            let sizesHTML = '';
            if (product.sizes) {
                sizesHTML = `<p class="size">Talles: ${product.sizes.join(', ')}</p>`;
            }

            // Nota de personalización
            let customHTML = '';
            if (product.customizable) {
                customHTML = `<p class="custom-notice">¡Personaliza tu diseño!</p>`;
            }

            // Advertencia de stock
            let stockHTML = '';
            if (product.stock && product.stock <= 3) {
                stockHTML = `<p class="stock-warning">¡Solo quedan ${product.stock} en stock!</p>`;
            }

            productCard.innerHTML = `
                ${tagsHTML}
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/products/default-product.jpg'">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${priceHTML}
                    ${sizesHTML}
                    <p class="description">${product.description}</p>
                    ${customHTML}
                    ${stockHTML}
                    <button class="whatsapp-btn" onclick="buyViaWhatsapp('${product.name}', ${product.price}, '${product.image}')">
                        <i class="fab fa-whatsapp"></i> COMPRAR
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Actualizar contador de resultados
        resultsCount.textContent = `${filteredProducts.length} productos encontrados`;
    }

    // Función para filtrar y ordenar productos
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedCategory = categoryFilter.value;
        const sortOption = sortSelect.value;
        
let filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                          product.description?.toLowerCase().includes(searchTerm);

    const matchesFilter = activeFilter === 'all' || 
                          (activeFilter === 'ofertas' && product.tags?.includes('oferta')) || 
                          product.category === activeFilter ||
                          product.tags?.includes(activeFilter);

    const matchesCategory = selectedCategory === 'all' || product.subcategory === selectedCategory;

    return matchesSearch && matchesFilter && matchesCategory;
});


        // Ordenar productos
        switch(sortOption) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'newest':
                filtered.sort((a, b) => b.id - a.id);
                break;
            default:
                // Sin ordenar (orden original)
                break;
        }

        renderProducts(filtered);
    }

    // Función para actualizar opciones de subcategorías
    function updateCategoryOptions() {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const categorySelect = document.getElementById('category-filter');
        
        // Limpiar opciones actuales
        categorySelect.innerHTML = '<option value="all">Todas las categorías</option>';
        
        if (activeFilter === 'all' || activeFilter === 'ofertas') {
            categorySelect.disabled = true;
            return;
        }
        
        categorySelect.disabled = false;
        
        // Obtener subcategorías únicas para la categoría seleccionada
        const subcategories = [...new Set(
            products
                .filter(p => p.category === activeFilter)
                .map(p => p.subcategory)
        )];
        
        // Agregar opciones
        subcategories.forEach(subcat => {
            if (subcat) {
                const option = document.createElement('option');
                option.value = subcat;
                option.textContent = subcat.charAt(0).toUpperCase() + subcat.slice(1);
                categorySelect.appendChild(option);
            }
        });
    }

    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    searchBtn.addEventListener('click', filterProducts);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateCategoryOptions();
            filterProducts();
        });
    });

    categoryFilter.addEventListener('change', filterProducts);
    sortSelect.addEventListener('change', filterProducts);

    // Cargar todos los productos inicialmente
    updateCategoryOptions();
    filterProducts();
});

// Función para comprar por WhatsApp (debe estar en el ámbito global)
function buyViaWhatsapp(productName, price, productImage) {
    const phoneNumber = "5492664633010";
    const message = `¡Hola GUZZOCORP! 👋\n\nQuiero comprar:\n\n*Producto:* ${productName}\n*Precio:* $${price.toLocaleString('es-AR')}\n\n[Ver imagen](${productImage})\n\nMi información:\n- Nombre: \n- Dirección: \n- Método de pago: (Efectivo/Transferencia)\n\n¡Gracias!`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
