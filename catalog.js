document.addEventListener('DOMContentLoaded', function() {
    // Base de datos de productos ampliada
    const products = [
        // Productos del index.html
        {
            id: 1,
            name: "Remera Térmica",
            price: 14999,
            oldPrice: 20000,
            category: "ropa",
            subcategory: "remeras",
            image: "assets/products/remera-termica.jpg",
            description: "Remera térmica de alta calidad",
            sizes: ["S", "M", "L", "XL"],
            discount: 20,
            tags: ["oferta"]
        },
        {
            id: 2,
            name: "Gorra NBA",
            price: 19999,
            oldPrice: 30000,
            category: "accesorios",
            subcategory: "gorras",
            image: "assets/products/gorra-nba.jpg",
            description: "Gorra ajustable NBA edición limitada",
            sizes: ["Ajustable"],
            discount: 33,
            tags: ["oferta", "nuevo"]
        },
        {
            id: 3,
            name: "Cuellitos Lycra Frizada",
            price: 3999,
            oldPrice: 5000,
            category: "accesorios",
            subcategory: "cuellos",
            image: "assets/products/cuellito-lycra.jpg",
            description: "Pack de cuellitos de lycra frizada",
            sizes: ["Único"],
            discount: 20,
            tags: ["oferta"]
        },
        {
            id: 4,
            name: "DC Court Graffick Rosas",
            price: 199999,
            category: "sneakers",
            subcategory: "skate",
            image: "assets/products/dc-court-graffick.jpg",
            description: "Las únicas de San Luis",
            sizes: ["36", "37", "38", "39", "40"],
            tags: ["exclusivo", "ultima-unidad"],
            stock: 1
        },
        {
            id: 5,
            name: "Puma 180",
            price: 169999,
            category: "sneakers",
            subcategory: "retro",
            image: "puma-180.jpeg",
            description: "Edición Super Exclusiva",
            sizes: ["38", "39", "40", "41", "42"],
            tags: ["original", "ultima-unidad"],
            stock: 1
        },
        {
            id: 6,
            name: "Osiris D3 2001",
            price: 299999,
            category: "sneakers",
            subcategory: "coleccionista",
            image: "assets/products/osiris-d3.jpg",
            description: "Edición Coleccionista",
            sizes: ["39", "40", "41", "42"],
            tags: ["coleccionista", "ultima-unidad"],
            stock: 1
        },
        {
            id: 7,
            name: "Remera Oversize Negra",
            price: 18000,
            category: "ropa",
            subcategory: "remeras",
            image: "assets/products/remera-oversize-negra.jpg",
            description: "Estampado a elección",
            sizes: ["S", "M", "L", "XL"],
            tags: ["mas-vendido"],
            customizable: true
        },
        {
            id: 8,
            name: "Remera Oversize Blanca",
            price: 18000,
            category: "ropa",
            subcategory: "remeras",
            image: "assets/products/remera-oversize-blanca.jpg",
            description: "Estampado a elección",
            sizes: ["S", "M", "L", "XL"],
            customizable: true
        },
        {
            id: 9,
            name: "Buzo Canguro Negro",
            price: 25000,
            category: "ropa",
            subcategory: "buzos",
            image: "assets/products/buzo-canguro-negro.jpg",
            description: "Con bolsillo canguro",
            sizes: ["S", "M", "L", "XL"],
            tags: ["mas-vendido"],
            customizable: true
        },
        
        // Productos adicionales de ejemplo
        {
            id: 10,
            name: "Zapatillas Nike Air Max",
            price: 189999,
            category: "sneakers",
            subcategory: "running",
            image: "https://example.com/nike-airmax.jpg",
            description: "Tecnología Air Max para máxima comodidad",
            sizes: ["38", "39", "40", "41", "42", "43"],
            tags: ["nuevo"],
            stock: 5
        },
        {
            id: 11,
            name: "Jeans Rotos Oversize",
            price: 28999,
            category: "ropa",
            subcategory: "pantalones",
            image: "https://example.com/jeans-rotos.jpg",
            description: "Jeans estilo streetwear con roturas",
            sizes: ["28", "30", "32", "34"],
            tags: ["nuevo"]
        },
        {
            id: 12,
            name: "Campera Denim",
            price: 45999,
            category: "ropa",
            subcategory: "abrigos",
            image: "https://example.com/campera-denim.jpg",
            description: "Campera de jean clásica",
            sizes: ["S", "M", "L", "XL"],
            tags: ["nuevo"]
        },
        {
            id: 13,
            name: "Mochila The North Face",
            price: 54999,
            category: "accesorios",
            subcategory: "mochilas",
            image: "https://example.com/mochila-tnf.jpg",
            description: "Resistente al agua y duradera",
            tags: ["nuevo"]
        },
        {
            id: 14,
            name: "Gafas de Sol Ray-Ban",
            price: 67999,
            category: "accesorios",
            subcategory: "gafas",
            image: "https://example.com/rayban.jpg",
            description: "Estilo clásico Aviator",
            tags: ["nuevo"]
        },
    {
        id: 15,
        name: "Calza One Leg",
        price: 19999,
        category: "ropa",
        subcategory: "calzas",
        image: "assets/products/calza-one-leg.jpg",
        description: "Calza deportiva one leg de alta calidad",
        sizes: ["S", "M", "L", "XL"],
        tags: ["nuevo"]
    },
    {
        id: 16,
        name: "Calza Larga",
        price: 24999,
        category: "ropa",
        subcategory: "calzas",
        image: "assets/products/calza-larga.jpg",
        description: "Calza larga para entrenamiento",
        sizes: ["S", "M", "L", "XL"],
        tags: ["nuevo"]
    },
    {
        id: 17,
        name: "Pelota de Basquet Molten BG4500",
        price: 129999,
        category: "accesorios",
        subcategory: "pelotas",
        image: "assets/products/molten-bg4500.jpg",
        description: "Pelota oficial de básquet Molten",
        tags: ["nuevo"]
    },
    {
        id: 18,
        name: "Nike Lebron XXI",
        price: 259999,
        category: "sneakers",
        subcategory: "basquet",
        image: "assets/products/lebron-xxi.jpg",
        description: "Zapatillas de basquetbol de élite",
        sizes: ["39", "40", "41", "42", "43", "44"],
        tags: ["nuevo"],
        stock: 0  // Sin stock
    },
    {
        id: 19,
        name: "Nike Lebron Witness 7",
        price: 259999,
        category: "sneakers",
        subcategory: "basquet",
        image: "assets/products/lebron-witness7.jpg",
        description: "Zapatillas para jugadores de basquet",
        sizes: ["39", "40", "41", "42", "43", "44"],
        tags: ["nuevo"],
        stock: 0  // Sin stock
    },
    {
        id: 20,
        name: "Calza Corta Deportiva Mujer",
        price: 7999,
        category: "ropa",
        subcategory: "calzas",
        image: "assets/products/calza-corta-mujer.jpg",
        description: "Calza deportiva para mujer",
        sizes: ["XS", "S", "M", "L"],
        tags: ["nuevo"]
    },
    {
        id: 21,
        name: "Giannis Immortality 4",
        price: 149999,
        category: "sneakers",
        subcategory: "basquet",
        image: "assets/products/giannis-immortality4.jpg",
        description: "Zapatillas de basquet Giannis Antetokounmpo",
        sizes: ["39", "40", "41", "42", "43", "44"],
        tags: ["nuevo"],
        stock: 0  // Sin stock
    },
    {
        id: 22,
        name: "Nike G.T. Cut Academy",
        price: 119999,
        category: "sneakers",
        subcategory: "basquet",
        image: "assets/products/nike-gt-cut.jpg",
        description: "Zapatillas de performance para basquet",
        sizes: ["39", "40", "41", "42", "43", "44"],
        tags: ["nuevo"],
        stock: 0  // Sin stock
    },
        // Agregar estos productos al array 'products' (después del último producto existente)
{
    id: 23,
    name: "Jordan Tatum 2",
    price: 219999,
    category: "sneakers",
    subcategory: "basquet",
    image: "assets/products/jordan-tatum2.jpg",
    description: "Zapatillas de baloncesto signature de Jayson Tatum",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    tags: ["nuevo", "exclusivo"],
    stock: 3
},
{
    id: 24,
    name: "Air Jordan XXXVIII",
    price: 319999,
    category: "sneakers",
    subcategory: "basquet",
    image: "assets/products/air-jordan-38.jpg",
    description: "Edición limitada de las Jordan más avanzadas tecnológicamente",
    sizes: ["40", "41", "42", "43", "44"],
    tags: ["nuevo", "exclusivo", "coleccionista"],
    stock: 2
},
{
    id: 25,
    name: "Kobe VIII Protro",
    price: 289999,
    category: "sneakers",
    subcategory: "basquet",
    image: "assets/products/kobe-viii-protro.jpg",
    description: "Homenaje a la leyenda del baloncesto Kobe Bryant",
    sizes: ["39", "40", "41", "42", "43"],
    tags: ["nuevo", "coleccionista"],
    stock: 1
},
{
    id: 26,
    name: "iPhone 16 128GB - Sellado -",
    price: 1199999,
    category: "tecnologia",
    subcategory: "celulares",
    image: "assets/products/iphone-16.jpg",
    description: "Nuevo iPhone 16 128GB sellado de fábrica",
    tags: ["nuevo", "exclusivo"],
    stock: 5
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
            // Filtro por búsqueda
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            
            // Filtro por categoría principal
            const matchesFilter = activeFilter === 'all' || 
                                 (activeFilter === 'ofertas' && product.tags && product.tags.includes('oferta')) || 
                                 product.category === activeFilter;
            
            // Filtro por subcategoría
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
