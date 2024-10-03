document.addEventListener("DOMContentLoaded", function() {
  const productContainer = document.getElementById('product-container');
  
  // JSON Settings
  const kamikatsuFetch = fetch('../JSON/kamikatsu.json')
      .then(response => response.json());

  Promise.all([kamikatsuFetch])
    .then(([data]) => {
      // Acceder al array
      const kamikatsuProducts = data.kamikatsuProducts;
      const kimetsuNoYaibaProducts = data.kimetsuNoYaibaProducts;

      // Verificanding
      if (!Array.isArray(kamikatsuProducts)) {
        throw new Error("El JSON no contiene un array válido");
      }

      // Iterar sobre los productos
      //kamikatsu Time
      kamikatsuProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-6', 'col-md-3');
        
        productDiv.innerHTML = `
          <a href="${product.Ruta}">
            <img src="${product.Image}" id="${product.Name.replace(/\s+/g, '')}" class="img-fluid imgFormat" alt="${product.Name}">
          </a>
        `;
        
        productContainer.appendChild(productDiv);
      });

      //Kimnetsu no yaiba Time
      kimetsuNoYaibaProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-6', 'col-md-3');
        
        productDiv.innerHTML = `
          <a href="${product.Ruta}">
            <img src="${product.Image}" id="${product.Name.replace(/\s+/g, '')}" class="img-fluid imgFormat" alt="${product.Name}">
          </a>
        `;
        
        productContainer.appendChild(productDiv);
      });
    })
    .catch(error => console.error('Error al cargar los JSON:', error));
});
