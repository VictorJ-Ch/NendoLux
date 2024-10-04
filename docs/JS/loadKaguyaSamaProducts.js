//ESTAS EN KAGUYA SAMA
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // JSON Settings
    const kaguyaSamaFetch = fetch('../JSON/kaguyaSama.json').then(response => response.json());
  
  
    Promise.all([kaguyaSamaFetch])
      .then(([data]) => {
        // Acceder al array
        const kaguyaSamaProducts = data.kaguyaSamaProducts;
  
        // Verificanding
        if (!Array.isArray(kaguyaSamaProducts)) {
          throw new Error("El JSON no contiene un array válido");
        }
  
        // Iterar sobre los productos
        //Kaguya Sama time
        kaguyaSamaProducts.forEach(product => {
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
  