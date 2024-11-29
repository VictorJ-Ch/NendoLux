// Load cart from localStorage on page load
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Adding product to cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.Name === product.Name);
    if (existingProduct) {
        existingProduct.Quantity++;
    } else {
        product.Quantity = 1;
        cart.push(product);
    }
    updateCartDisplay();
    saveCart();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;  // Check if the element exists

    cartItemsContainer.innerHTML = '';

    const title = document.createElement('p');
    title.style.fontSize = '20px';
    title.style.textDecoration = 'none';
    title.innerText = 'Agregado a la bolsa de compras';
    cartItemsContainer.appendChild(title);
    cartItemsContainer.appendChild(document.createElement('hr'));

    if (cart.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.id = 'cart-empty';
        emptyMessage.innerHTML = '<p>Nothing yet</p>';
        cartItemsContainer.appendChild(emptyMessage);
    } else {
        document.getElementById('cart-empty')?.remove();

        // Determine the correct path for images
        const basePath = window.location.pathname.includes('index.html') ? './IMG/' : '../IMG/';

        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');

            // Adjust the image path dynamically
            const imagePath = `${basePath}${item.Image}`;

            // Calculate total price for the product
            const totalPrice = (10000 * item.Quantity).toFixed(2);

            // Create HTML for each product in the cart
            li.innerHTML = `
                <div class="d-flex">
                    <img src="${imagePath}" alt="${item.Name}" class="img-fluid me-2" style="width: 50px; height: 50px;">
                    <div>
                        <strong>${item.Name}</strong><br>
                        <span>$${totalPrice} MXN</span><br>
                        <span>Quantity: ${item.Quantity}</span>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(li);
        });
    }

    // Determine the correct path for buttons
    const baseButtonPath = window.location.pathname.includes('index.html') ? './Cart/' : '../Cart/';

    // Buttons
    cartItemsContainer.appendChild(document.createElement('hr'));
    const finalizaCompraButton = document.createElement('a');
    finalizaCompraButton.href = `${baseButtonPath}buy.html`;
    finalizaCompraButton.classList.add('btn', 'btn-outline-secondary');
    finalizaCompraButton.innerText = 'Finalizar compra';

    const verBolsaButton = document.createElement('a');
    verBolsaButton.href = `${baseButtonPath}cart.html`;
    verBolsaButton.classList.add('btn', 'btn-dark');
    verBolsaButton.innerText = 'Ver bolsa de compras';

    cartItemsContainer.appendChild(finalizaCompraButton);
    cartItemsContainer.appendChild(document.createElement('p'));
    cartItemsContainer.appendChild(verBolsaButton);
}

// Update quantity in cart
function updateQuantity(productName, newQuantity) {
    const product = cart.find(item => item.Name === productName);
    if (product) {
        product.Quantity = parseInt(newQuantity);
        saveCart();
        updateCartDisplay();  // Update cart display to reflect new quantity
        displayCartItems();   // Update cart items in cart.html to reflect new quantity and price
    }
}

// Remove product from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.Name !== productName);
    saveCart();
    updateCartDisplay();  // Update cart display after removing product
    displayCartItems();   // Update cart items in cart.html after removing product
}

// Load products
function loadProducts() {
    // JSON's
    Promise.all([
        fetch('../JSON/callOfTheNight.json').then(response => response.json()),
        fetch('../JSON/chainsawMan.json').then(response => response.json()),
        fetch('../JSON/kaguyaSama.json').then(response => response.json()),
        fetch('../JSON/kamikatsu.json').then(response => response.json()),
        fetch('../JSON/kimetsuNoYaiba.json').then(response => response.json()),
        fetch('../JSON/kobayashisDragonMaid.json').then(response => response.json()),
        fetch('../JSON/persona3.json').then(response => response.json()),
        fetch('../JSON/persona5.json').then(response => response.json()),
        fetch('../JSON/persona5Royal.json').then(response => response.json()),
        fetch('../JSON/tomoChanIsAGirl.json').then(response => response.json())
    ])
    .then(data => {
        const allProducts = [
            ...data[0].callOfTheNightProducts,
            ...data[1].chainsawManProducts,
            ...data[2].kaguyaSamaProducts,
            ...data[3].kamikatsuProducts,
            ...data[4].kimetsuNoYaibaProducts,
            ...data[5].kobayashisDragonMaidProducts,
            ...data[6].persona3Products,
            ...data[7].persona5Products,
            ...data[8].persona5RoyalProducts,
            ...data[9].tomoChanIsAGirlProducts
        ];

        const addToCartButtons = document.querySelectorAll('.btn-dark');
        addToCartButtons.forEach(button => {
            const productName = button.getAttribute('data-product-name');
            const product = allProducts.find(item => item.Name === productName);

            button.addEventListener('click', function() {
                addToCart(product);
            });
        });
    })
    .catch(error => {
        console.error('Error loading the JSONs:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartDisplay();

    // Check if on cart.html
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
});
