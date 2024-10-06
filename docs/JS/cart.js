let cart = [];

// Adding product to cart
function addToCart(product) {
    // Buscar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.Name === product.Name);
    if (existingProduct) {
        // Si ya existe, incrementar la cantidad
        existingProduct.Quantity++;
    } else {
        // Si no existe, agregarlo con una cantidad de 1
        product.Quantity = 1;
        cart.push(product);
    }
    updateCartDisplay(); // Actualizar la vista del carrito
}

// Update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar el contenido actual

    const title = document.createElement('p');
    title.style.fontSize = '20px';
    title.style.textDecoration = 'none';
    title.innerText = 'Agregado a la bolsa de compras';
    cartItemsContainer.appendChild(title);
    cartItemsContainer.appendChild(document.createElement('hr')); // Añadir separador

    if (cart.length === 0) {
        // Si el carrito está vacío, mostrar mensaje
        const emptyMessage = document.createElement('div');
        emptyMessage.id = 'cart-empty';
        emptyMessage.innerHTML = '<p>Nada aún</p>';
        cartItemsContainer.appendChild(emptyMessage);
    } else {
        // Si hay productos en el carrito, remover el mensaje vacío
        document.getElementById('cart-empty')?.remove();

        // Mostrar los productos en el carrito
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');

            // Crear el HTML para cada producto en el carrito
            li.innerHTML = `
                <div class="d-flex">
                    <img src="${item.Image}" alt="${item.Name}" class="img-fluid me-2" style="width: 50px; height: 50px;">
                    <div>
                        <strong>${item.Name}</strong><br>
                        <span>$10.800,00 MXN</span><br>
                        <span>Cantidad: ${item.Quantity}</span>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(li); // Añadir al contenedor del carrito
        });
    }

    // Botones para finalizar compra y ver bolsa
    const finalizaCompraButton = document.createElement('a');
    finalizaCompraButton.href = '#';
    finalizaCompraButton.classList.add('btn', 'btn-outline-secondary');
    finalizaCompraButton.innerText = 'Finalizar compra';

    const verBolsaButton = document.createElement('a');
    verBolsaButton.href = '#';
    verBolsaButton.classList.add('btn', 'btn-dark');
    verBolsaButton.innerText = 'Ver bolsa de compras';

    cartItemsContainer.appendChild(finalizaCompraButton); // Añadir botón de finalizar compra
    cartItemsContainer.appendChild(document.createElement('p')); // Espacio
    cartItemsContainer.appendChild(verBolsaButton); // Añadir botón de ver bolsa
}

// Función para cargar los productos desde varios JSON
function loadProducts() {
    // Realizar múltiples fetch a los archivos JSON
    Promise.all([
        fetch('../JSON/callOfTheNight.json').then(response => response.json()),
        fetch('../JSON/chainsawMan.json').then(response => response.json()), // Segundo archivo JSON
        fetch('../JSON/kaguyaSama.json').then(response => response.json()) // Tercer archivo JSON
    ])
    .then(data => {
        // Combine todos los productos de los JSON en un solo array
        const allProducts = [
            ...data[0].callOfTheNightProducts,  // productos del primer archivo JSON
            ...data[1].chainsawManProducts,         // productos del segundo archivo JSON
            ...data[2].kaguyaSamaProducts             // productos del tercer archivo JSON
        ];

        // Añadir eventos a los botones de "Agregar a la bolsa"
        const addToCartButtons = document.querySelectorAll('.btn-dark');
        addToCartButtons.forEach(button => {
            const productName = button.getAttribute('data-product-name'); // Obtener el nombre del producto desde el atributo data
            const product = allProducts.find(item => item.Name === productName); // Buscar el producto por nombre

            // Asignar el evento de click para agregar el producto correcto al carrito
            button.addEventListener('click', function() {
                addToCart(product); // Agregar producto al carrito
            });
        });
    })
    .catch(error => {
        console.error('Error al cargar los JSON:', error); // Manejar errores
    });
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    loadProducts(); // Llamar a la función para cargar los productos cuando la página se cargue
});