//ESTAS EN PERSONA 5
document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    
    // JSON Settings
    const persona5Fetch = fetch('../JSON/persona5.json').then(response => response.json());
  
  
    Promise.all([persona5Fetch])
      .then(([data]) => {
        // Acceder al array
        const persona5Products = data.persona5Products;
  
        // Verificanding
        if (!Array.isArray(persona5Products)) {
          throw new Error("El JSON no contiene un array válido");
        }
  
        // Iterar sobre los productos
        //persona 5 time
        persona5Products.forEach(product => {
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
  