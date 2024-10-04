//ESTAS EN CALL OF THE NIGHT
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // JSON Settings
    const callOfTheNightFetch = fetch('../JSON/callOfTheNight.json').then(response => response.json());
  
  
    Promise.all([callOfTheNightFetch])
      .then(([data]) => {
        // Acceder al array
        const callOfTheNightProducts = data.callOfTheNightProducts;
  
        // Verificanding
        if (!Array.isArray(callOfTheNightProducts)) {
          throw new Error("El JSON no contiene un array válido");
        }
  
        // Iterar sobre los productos
        //call of the night Time
        callOfTheNightProducts.forEach(product => {
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
  