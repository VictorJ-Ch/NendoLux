document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search_input');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        
        // Limpiar los resultados anteriores
        searchResults.innerHTML = '';
        
        if (query) {
            // Cargar los JSON
            Promise.all([
                fetch('../JSON/kamikatsu.json').then(res => res.json()),
                fetch('../JSON/kimetsuNoYaiba.json').then(res => res.json()),
                fetch('../JSON/callOfTheNight.json').then(res => res.json()),
                fetch('../JSON/chainsawMan.json').then(res => res.json()),
                fetch('../JSON/kaguyaSama.json').then(res => res.json()),
                fetch('../JSON/kobayashisDragonMaid.json').then(res => res.json()),
                fetch('../JSON/persona3.json').then(res => res.json()),
                fetch('../JSON/persona5.json').then(res => res.json()),
                fetch('../JSON/persona5Royal.json').then(res => res.json()),
                fetch('../JSON/tomoChanIsAGirl.json').then(res => res.json())
            ])
            .then(([kamikatsuData, kimetsuData, callOfTheNightData, chainsawManData, kaguyaSamaData, kobayashisDragonMaidData, persona3Data, persona5Data, persona5RoyalData, tomoChanIsAGirlData]) => {
                // Acceder a las listas de productos en los JSON
                const allProducts = [
                    ...kamikatsuData.kamikatsuProducts, 
                    ...kimetsuData.kimetsuNoYaibaProducts,
                    ...callOfTheNightData.callOfTheNightProducts, 
                    ...chainsawManData.chainsawManProducts, 
                    ...kaguyaSamaData.kaguyaSamaProducts, 
                    ...kobayashisDragonMaidData.kobayashisDragonMaidProducts, 
                    ...persona3Data.persona3Products, 
                    ...persona5Data.persona5Products, 
                    ...persona5RoyalData.persona5RoyalProducts, 
                    ...tomoChanIsAGirlData.tomoChanIsAGirlProducts
                ];
                
                // Filtrar los productos por el texto de búsqueda
                const filteredProducts = allProducts.filter(product => 
                    product.Name.toLowerCase().includes(query)
                );
                
                // Mostrar los productos en los resultados
                filteredProducts.forEach(product => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('d-flex', 'mb-3');
                    
                    // Crear el HTML de cada resultado
                    resultItem.innerHTML = `
                        <div class="col-4">
                            <img src="${product.Image}" class="img-fluid imgSearch" alt="${product.Name}">
                        </div>
                        <div class="col-8 d-flex align-items-center">
                            <a href="${product.Ruta}" class="text-dark text-decoration-none">
                                <h5>${product.Name}</h5>
                            </a>
                        </div>
                    `;
                    
                    searchResults.appendChild(resultItem);
                });
                
                // Mostrar mensaje si no hay resultados
                if (filteredProducts.length === 0) {
                    searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
                }
            })
            .catch(error => console.error('Error al cargar los JSON:', error));
        }
    });
});