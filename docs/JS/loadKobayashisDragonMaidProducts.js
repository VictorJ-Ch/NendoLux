//ESTAS EN KOBAYASHI'S DRAGON MAID
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // JSON Settings
    const kobayashisDragonMaidFetch = fetch('../JSON/kobayashisDragonMaid.json').then(response => response.json());
  
  
    Promise.all([kobayashisDragonMaidFetch])
      .then(([data]) => {
        // Acceder al array
        const kobayashisDragonMaidProducts = data.kobayashisDragonMaidProducts;
  
        // Verificanding
        if (!Array.isArray(kobayashisDragonMaidProducts)) {
          throw new Error("El JSON no contiene un array válido");
        }
  
        // Iterar sobre los productos
        //Kobayashi's dragon maid time
        kobayashisDragonMaidProducts.forEach(product => {
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
  