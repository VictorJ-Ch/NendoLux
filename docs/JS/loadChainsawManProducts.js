//ESTAS EN CHAINSAW MAN
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // JSON Settings
    const chainsawManFetch = fetch('../JSON/chainsawMan.json').then(response => response.json());
  
  
    Promise.all([chainsawManFetch])
      .then(([data]) => {
        // Acceder al array
        const chainsawManProducts = data.chainsawManProducts;
  
        // Verificanding
        if (!Array.isArray(chainsawManProducts)) {
          throw new Error("El JSON no contiene un array válido");
        }
  
        // Iterar sobre los productos
        //Chainsaw time
        chainsawManProducts.forEach(product => {
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
  