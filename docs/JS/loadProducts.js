document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // Product Sections
    // Ruta JSON
    const kamikatsuFetch = fetch('JSON/kamikatsu.json').then(response => response.json());
    //const kimetsuFetch = fetch('kimetsu.json').then(response => response.json());
  
    // Combination
    Promise.all([kamikatsuFetch])
      .then(([kamikatsuProducts]) => {
        const allProducts = [...kamikatsuProducts,];
        
        allProducts.forEach(product => {
          // DOM Struture
          const productDiv = document.createElement('div');
          productDiv.classList.add('col-6', 'col-md-3');
          
          productDiv.innerHTML = `
            <a href="${product.Ruta}">
              <img src="${product.Image}" id="${product.Name.replace(/\s+/g, '')}" class="img-fluid imgFormat" alt="${product.Name}">
            </a>
          `;
          
          // NO CAMBIAR
          productContainer.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error al cargar los JSON:', error));
  });