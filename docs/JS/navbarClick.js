const iconIds = ['catalogo-icon', 'search-icon', 'user-icon', 'bolsa-icon', 'contactanos-bttn'];

iconIds.forEach(id => {
    document.getElementById(id).addEventListener('click', function(e) {
        e.preventDefault();
        const myCatalog = document.getElementById('myCatalog');
        const mySearch = document.getElementById('mySearch');
        const myUser = document.getElementById('myUser');
        const myBag = document.getElementById('myBolsa');
        const myContactanos = document.getElementById('myContactanos');

        // Lista de elementos
        const elements = [myCatalog, mySearch, myUser, myBag, myContactanos];

        // Comprobar si el botón clickeado ya está visible
        const clickedElement = {
            'catalogo-icon': myCatalog,
            'search-icon': mySearch,
            'user-icon': myUser,
            'bolsa-icon': myBag,
            'contactanos-bttn': myContactanos // Corrección aquí
        }[id];

        // Si el elemento clickeado ya está visible, lo ocultamos
        if (clickedElement && !clickedElement.classList.contains('d-none')) {
            clickedElement.classList.add('d-none');
        } else {
            // Ocultar otros elementos y mostrar el clickeado
            elements.forEach(element => {
                element.classList.add('d-none'); // Ocultar todos
            });
            if (clickedElement) {
                clickedElement.classList.remove('d-none'); // Mostrar el clickeado
                positionElement(clickedElement); // Posicionar el elemento visible
            }
        }
    });
});

// Función para posicionar los elementos dentro del viewport
function positionElement(element) {
    element.style.left = '0';
    element.style.top = '100%'; // Ajuste aquí para desplegar hacia abajo
    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Ajustar dentro del viewport
    if (rect.right > viewportWidth) {
        element.style.left = `${viewportWidth - rect.right - 10}px`;
    }
    if (rect.left < 0) {
        element.style.left = '10px';
    }
    if (rect.bottom > viewportHeight) {
        element.style.top = `${-rect.height}px`;
    }
}

// Ocultar todos los elementos al hacer scroll
window.addEventListener('scroll', function() {
    const elements = [
        document.getElementById('myCatalog'),
        document.getElementById('mySearch'),
        document.getElementById('myUser'),
        document.getElementById('myBolsa'),
        document.getElementById('myContactanos')
    ];

    elements.forEach(element => {
        if (!element.classList.contains('d-none')) {
            element.classList.add('d-none');
        }
    });
});

