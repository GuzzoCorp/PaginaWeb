document.addEventListener('DOMContentLoaded', function() {
    // Base de datos completa de productos con todas las propiedades necesarias
    const products = [
        {
            id: 1,
            name: "Remera Térmica",
            image: "remera-termica.jpeg",
            category: "ropa",
            tags: ["oferta", "hombre", "mujer"],
            price: 12990,
            description: "Remera térmica para climas fríos",
            oldPrice: 15990
        },
        {
            id: 2,
            name: "Gorra",
            image: "gorra.jpeg",
            category: "accesorios",
            tags: ["oferta", "nuevo", "hombre", "mujer"],
            price: 8990,
            description: "Gorra ajustable de alta calidad"
        },
        {
            id: 3,
            name: "Cuellos Lycra Frizada",
            image: "cuellos-lycra-frizada.jpeg",
            category: "ropa",
            tags: ["oferta", "hombre", "mujer"],
            price: 5990,
            description: "Cuellos de lycra para abrigo",
            oldPrice: 7990
        },
        {
            id: 4,
            name: "DC Court Graffick Rosas",
            image: "dc-rosas.jpeg",
            category: "sneakers",
            tags: ["ultima-unidad", "hombre", "mujer"],
            price: 45990,
            description: "Zapatillas DC estilo skater"
        },
        {
            id: 5,
            name: "Puma 180",
            image: "puma-180.jpeg",
            category: "sneakers",
            tags: ["ultima-unidad", "hombre"],
            price: 38990,
            description: "Zapatillas Puma clásicas"
        },
        {
            id: 6,
            name: "Osiris D3 2001",
            image: "osiris-d3.jpeg",
            category: "sneakers",
            tags: ["ultima-unidad", "hombre"],
            price: 42990,
            description: "Zapatillas Osiris retro"
        },
        {
            id: 7,
            name: "Remera Oversize Negra",
            image: "remera-oversize-negra.jpeg",
            category: "ropa",
            tags: ["mas-vendido", "hombre", "salir"],
            price: 14990,
            description: "Remera oversize de algodón"
        },
        {
            id: 8,
            name: "Remera Oversize Blanca",
            image: "remera-oversize-blanca.jpeg",
            category: "ropa",
            tags: ["hombre", "salir"],
            price: 14990,
            description: "Remera oversize básica"
        },
        {
            id: 9,
            name: "Buzo Canguro Negro",
            image: "buzo-canguro-negro.jpeg",
            category: "ropa",
            tags: ["mas-vendido", "hombre", "salir"],
            price: 24990,
            description: "Buzo con capucha y bolsillo"
        },
        {
            id: 10,
            name: "Zapatillas Nike Air Max",
            image: "nike-air-max.jpeg",
            category: "sneakers",
            tags: ["nuevo", "hombre", "deportivo"],
            price: 65990,
            description: "Zapatillas Nike con tecnología Air"
        },
        {
            id: 11,
            name: "Jeans Rotos Oversize",
            image: "jeans-rotos-oversize.jpeg",
            category: "ropa",
            tags: ["nuevo", "hombre", "salir"],
            price: 28990,
            description: "Jeans estilo urbano con roturas"
        },
        {
            id: 12,
            name: "Campera Denim",
            image: "campera-denim.jpeg",
            category: "ropa",
            tags: ["nuevo", "hombre", "salir"],
            price: 39990,
            description: "Campera de jean clásica"
        },
        {
            id: 13,
            name: "Mochila The North Face",
            image: "mochila-the-north-face.jpeg",
            category: "accesorios",
            tags: ["nuevo", "hombre", "mujer"],
            price: 45990,
            description: "Mochila resistente para uso diario"
        },
        {
            id: 14,
            name: "Gafas de Sol Ray-Ban",
            image: "gafas-rayban.jpeg",
            category: "accesorios",
            tags: ["nuevo", "hombre", "mujer", "salir"],
            price: 32990,
            description: "Gafas de sol estilo aviador"
        },
        {
            id: 15,
            name: "Calza One Leg",
            image: "calza-one-leg.jpeg",
            category: "ropa",
            tags: ["nuevo", "mujer", "deportivo"],
            price: 15990,
            description: "Calza deportiva de alta compresión"
        },
        {
            id: 16,
            name: "Calza Larga",
            image: "calza-larga.jpeg",
            category: "ropa",
            tags: ["nuevo", "mujer", "deportivo"],
            price: 17990,
            description: "Calza larga para entrenamiento"
        },
        {
            id: 17,
            name: "Pelota de Basquet Molten BG4500",
            image: "molten-bg4500.jpeg",
            category: "accesorios",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 24990,
            description: "Pelota oficial de baloncesto"
        },
        {
            id: 18,
            name: "Nike Lebron XXI",
            image: "lebron-xxi.jpeg",
            category: "sneakers",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 89990,
            description: "Zapatillas de baloncesto de alto rendimiento"
        },
        {
            id: 19,
            name: "Nike Lebron Witness 7",
            image: "lebron-witness7.jpeg",
            category: "sneakers",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 65990,
            description: "Zapatillas para baloncesto"
        },
        {
            id: 20,
            name: "Calza Corta Deportiva Mujer",
            image: "calza-corta-mujer.jpeg",
            category: "ropa",
            tags: ["nuevo", "mujer", "deportivo"],
            price: 13990,
            description: "Calza corta para entrenamiento"
        },
        {
            id: 21,
            name: "Giannis Immortality 4",
            image: "giannis-immortality4.jpeg",
            category: "sneakers",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 75990,
            description: "Zapatillas diseñadas para Giannis Antetokounmpo"
        },
        {
            id: 22,
            name: "Nike G.T. Cut Academy",
            image: "nike-gt-cut.jpeg",
            category: "sneakers",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 68990,
            description: "Zapatillas de baloncesto reactivas"
        },
        {
            id: 23,
            name: "Jordan Tatum 2",
            image: "jordan-tatum2.jpeg",
            category: "sneakers",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 81990,
            description: "Zapatillas firmadas por Jayson Tatum"
        },
        {
            id: 24,
            name: "Air Jordan XXXVIII",
            image: "air-jordan-38.jpeg",
            category: "sneakers",
            tags: ["nuevo", "deportivo", "hombre"],
            price: 99990,
            description: "Último modelo de la línea Jordan"
        },
        {
            id: 25,
            name: "Kobe VIII Protro",
            image: "kobe-viii-protro.jpeg",
            category: "sneakers",
            tags: ["nuevo", "coleccionista", "deportivo", "hombre"],
            price: 129990,
            description: "Edición especial en honor a Kobe Bryant"
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
    const productGrid = document.getElementById('product-grid');
    const resultsCount = document.getElementById('results-count');

    // Función para renderizar productos
    function renderProducts(filteredProducts) {
        productGrid.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<p class="no-results">No se encontraron productos que coincidan con tu búsqueda.</p>';
            resultsCount.textContent = '0 productos encontrados';
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Construir etiquetas
            let tagsHTML = '';
            if (product.tags) {
                if (product.tags.includes('oferta')) {
                    const discount = product.oldPrice ? Math.round((1 - product.price/product.oldPrice)*100) : 20;
                    tagsHTML += `<span class="tag-discount">${discount}% OFF</span>`;
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

            productCard.innerHTML = `
                ${tagsHTML}
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/products/default-product.jpg'">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${priceHTML}
                    <p class="description">${product.description}</p>
                    <button class="whatsapp-btn" onclick="buyViaWhatsapp('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')">
                        <i class="fab fa-whatsapp"></i> COMPRAR
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        resultsCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'producto' : 'productos'} encontrados`;
    }

    // Función para filtrar productos
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const sortOption = document.getElementById('sort-select').value;
        
        let filtered = products.filter(product => {
            // Filtro por búsqueda
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                              (product.description && product.description.toLowerCase().includes(searchTerm));
            
            // Filtro por categoría/tag seleccionado
            let matchesFilter = false;
            
            if (activeFilter === 'all') {
                matchesFilter = true;
            } 
            else if (activeFilter === 'ofertas') {
                matchesFilter = product.tags?.includes('oferta');
            }
            else if (['sneakers', 'ropa', 'accesorios'].includes(activeFilter)) {
                matchesFilter = product.category === activeFilter;
            }
            else {
                matchesFilter = product.tags?.includes(activeFilter);
            }
            
            return matchesSearch && matchesFilter;
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
                // Orden original
                break;
        }

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

    document.getElementById('sort-select').addEventListener('change', filterProducts);

    // Cargar todos los productos inicialmente
    filterProducts();
});

// Función para comprar por WhatsApp
function buyViaWhatsapp(productName, price, productImage) {
    const phoneNumber = "5492664633010";
    const message = `¡Hola GUZZOCORP! 👋\n\nQuiero comprar:\n\n*Producto:* ${productName}\n*Precio:* $${price.toLocaleString('es-AR')}\n\n[Ver imagen](${productImage})\n\nMi información:\n- Nombre: \n- Dirección: \n- Método de pago: (Efectivo/Transferencia)\n\n¡Gracias!`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
}); // Cierre de document.addEventListener
