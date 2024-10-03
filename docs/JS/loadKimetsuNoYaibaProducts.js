//ESTAS EN KIMETSU NO YAIBA
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // JSON Settings
    const kimetsuNoYaibaFetch = fetch('../JSON/kimetsuNoYaiba.json').then(response => response.json());

      //Kimetsu Settings
        Promise.all([kimetsuNoYaibaFetch])
        .then(([data]) => {
        // Acceder al array
        const kimetsuNoYaibaProducts = data.kimetsuNoYaibaProducts;

        // Verificanding
        if (!Array.isArray(kimetsuNoYaibaProducts)) {
            throw new Error("El JSON no contiene un array válido");
        }

        // Iterar sobre los productos
        //Kimnetsu no yaiba Time
        kimetsuNoYaibaProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-6', 'col-md-3');

            productDiv.innerHTML = `
                <a href="${product.Ruta}" class="miniPadding">
                <img src="${product.Image}" id="${product.Name.replace(/\s+/g, '')}" class="img-fluid imgFormat" alt="${product.Name}">
                </a>
            `;

            productContainer.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error al cargar los JSON:', error));
});