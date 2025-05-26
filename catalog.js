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
            name: "Gorra",
            price: 24999,
            oldPrice: 40000,
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
            image: "dc-rosas.jpeg",
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
            image: "osiris-d3.jpeg",
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
            stock: 0
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
            stock: 0
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
            stock: 0
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
            stock: 0
        },
        {
            id: 23,
            name: "Jordan Tatum 2",
            price: 219999,
            category: "sneakers",
            subcategory: "basquet",
            image: "assets/products/jordan-tatum2.jpg",
            description: "Zapatillas de baloncesto signature de Jayson Tatum",
            sizes: ["39", "40", "41", "42", "43", "44", "45"],
            tags: ["nuevo"],
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
            tags: ["nuevo"],
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
        },
        // Nuevos productos del PDF
        {
            id: 27,
            name: "Botas Bucaneras (gamuza sintética)",
            price: 39000,
            category: "calzado",
            subcategory: "botas",
            image: "assets/products/botas-bucaneras.jpg",
            description: "Botas altas negras de caña alta en material elastizado",
            sizes: ["36", "37", "38", "39", "40"],
            tags: ["mas-vendido"],
            colors: ["Negro"]
        },
        {
            id: 28,
            name: "Borcegos veganos plataforma",
            price: 43000,
            category: "calzado",
            subcategory: "borcegos",
            image: "assets/products/borcegos-veganos.jpg",
            description: "Botines altos negros con cordones y plataforma",
            sizes: ["35", "36", "37", "38", "39", "40"],
            tags: ["nuevo"],
            colors: ["Negro"]
        },
        {
            id: 29,
            name: "Remera oversize 2Pac (All Eyez On Me)",
            price: 29000,
            category: "ropa",
            subcategory: "remeras",
            image: "assets/products/remera-2pac.jpg",
            description: "Remera algodón oversize con estampado de Tupac Shakur",
            sizes: ["M", "L", "XL"],
            tags: ["mas-vendido"],
            colors: ["Negro"]
        },
        {
            id: 30,
            name: "Pantalón cargo alto con strass",
            price: 71000,
            category: "ropa",
            subcategory: "pantalones",
            image: "assets/products/pantalon-cargo-strass.jpg",
            description: "Cargo recto con strass tono sobre tono",
            sizes: ["S", "M", "L", "XL"],
            tags: ["nuevo"],
            colors: ["Fucsia", "Verde"]
        },
        {
            id: 31,
            name: "Remera con malla transparente",
            price: 20000,
            category: "ropa",
            subcategory: "remeras",
            image: "assets/products/remera-malla.jpg",
            description: "Remera algodón blanca con detalles en malla translúcida",
            sizes: ["S", "M"],
            tags: ["nuevo"],
            colors: ["Blanco"]
        },
        {
            id: 32,
            name: "Campera Nike Tech Fleece",
            price: 150000,
            category: "ropa",
            subcategory: "abrigos",
            image: "assets/products/campera-nike.jpg",
            description: "Campera polar Tech Fleece, interior forro suave",
            sizes: ["L", "XL", "XXL"],
            tags: ["nuevo", "exclusivo"],
            colors: ["Negro"]
        },
        {
            id: 33,
            name: "Campera puffer acolchonada",
            price: 48000,
            category: "ropa",
            subcategory: "abrigos",
            image: "assets/products/campera-puffer.jpg",
            description: "Campera corta acolchada con cierre frontal",
            sizes: ["S", "M", "L"],
            tags: ["mas-vendido"],
            colors: ["Negro"]
        },
        {
            id: 34,
            name: "Zapatillas Adidas Superstar 80's",
            price: 40000,
            category: "calzado",
            subcategory: "zapatillas",
            image: "assets/products/adidas-superstar.jpg",
            description: "Zapatillas clásicas blancas de cuero con puntera de concha",
            sizes: ["39.5"],
            tags: ["clasico"],
            colors: ["Blanco"]
        },
        {
            id: 35,
            name: "Top oversize algodón (manga larga)",
            price: 12000,
            category: "ropa",
            subcategory: "tops",
            image: "assets/products/top-oversize.jpg",
            description: "Top negro oversize de algodón, cuello redondo",
            sizes: ["S", "M"],
            tags: ["nuevo"],
            colors: ["Negro"]
        },
        {
            id: 36,
            name: "Pollera larga acampanada lisa",
            price: 27000,
            category: "ropa",
            subcategory: "polleras",
            image: "assets/products/pollera-acampanada.jpg",
            description: "Falda maxi lisa con elástico ancho en cintura",
            sizes: ["S", "M", "L"],
            tags: ["nuevo"],
            colors: ["Rojo"]
        },
        {
            id: 37,
            name: "Top satén liso con tirantes finos",
            price: 21000,
            category: "ropa",
            subcategory: "tops",
            image: "assets/products/top-saten.jpg",
            description: "Top satinado con escote en V y cordón de ajuste",
            sizes: ["S", "M"],
            tags: ["nuevo"],
            colors: ["Negro", "Rojo"]
        },
        {
            id: 38,
            name: "Cinturón ancho metalizado (Tresher)",
            price: 10000,
            category: "accesorios",
            subcategory: "cinturones",
            image: "assets/products/cinturon-metalizado.jpg",
            description: "Cinturón tipo fajín ancho rígido con detalle metálico",
            sizes: ["Único"],
            tags: ["nuevo"],
            colors: ["Plateado", "Dorado"]
        },
        {
            id: 39,
            name: "Jogging oversize lycra deportivo",
            price: 71000,
            category: "ropa",
            subcategory: "pantalones",
            image: "assets/products/jogging-lycra.jpg",
            description: "Babucha deportiva oversize en lycra, tiro alto",
            sizes: ["S", "M", "L"],
            tags: ["nuevo"],
            colors: ["Negro"]
        },
        {
            id: 40,
            name: "Remera estampado animal sobre blanco",
            price: 25000,
            category: "ropa",
            subcategory: "remeras",
            image: "assets/products/remera-animal.jpg",
            description: "Remera algodón blanca con estampado animal (leopardo/zebra)",
            sizes: ["S", "M", "L"],
            tags: ["nuevo"],
            colors: ["Blanco"]
        },
        {
            id: 41,
            name: "Jean wide leg animal print",
            price: 47000,
            category: "ropa",
            subcategory: "pantalones",
            image: "assets/products/jean-animal.jpg",
            description: "Jean palazzo ancho blanco con estampado animal zebra",
            sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
            tags: ["nuevo"],
            colors: ["Blanco", "Negro"]
        },
        {
            id: 42,
            name: "Sweater oversize estampado cebra",
            price: 45000,
            category: "ropa",
            subcategory: "sweaters",
            image: "assets/products/sweater-cebra.jpg",
            description: "Sweater lana oversize de corte amplio estampado cebra",
            sizes: ["3XL"],
            tags: ["nuevo"],
            colors: ["Verde"]
        },
        {
            id: 43,
            name: "Top bandeau plisado sin tirantes",
            price: 18000,
            category: "ropa",
            subcategory: "tops",
            image: "assets/products/top-bandeau.jpg",
            description: "Top sin tirantes plisado con cordón de ajuste",
            sizes: ["S", "M"],
            tags: ["nuevo"],
            colors: ["Rosa"]
        },
        {
            id: 44,
            name: "Buzo canguro tela peluche",
            price: 17000,
            category: "ropa",
            subcategory: "buzos",
            image: "assets/products/buzo-peluche.jpg",
            description: "Buzo gris forro de peluche bifaz con capucha canguro",
            sizes: ["S-M", "L-XL", "2XL-3XL"],
            tags: ["mas-vendido"],
            colors: ["Gris"]
        }
    ];

    // Resto del código permanece igual...
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
