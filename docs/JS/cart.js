let cart = [];

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
}

// Update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
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
        emptyMessage.innerHTML = '<p>Nada aún</p>';
        cartItemsContainer.appendChild(emptyMessage);
    } else {
        document.getElementById('cart-empty')?.remove();

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
            cartItemsContainer.appendChild(li);
        });
    }

    // Bttns
    cartItemsContainer.appendChild(document.createElement('hr'));
    const finalizaCompraButton = document.createElement('a');
    finalizaCompraButton.href = '#';
    finalizaCompraButton.classList.add('btn', 'btn-outline-secondary');
    finalizaCompraButton.innerText = 'Finalizar compra';

    const verBolsaButton = document.createElement('a');
    verBolsaButton.href = '../Cart/cart.html';
    verBolsaButton.classList.add('btn', 'btn-dark');
    verBolsaButton.innerText = 'Ver bolsa de compras';

    cartItemsContainer.appendChild(finalizaCompraButton);
    cartItemsContainer.appendChild(document.createElement('p'));
    cartItemsContainer.appendChild(verBolsaButton);
}

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
        console.error('Error al cargar los JSON:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});