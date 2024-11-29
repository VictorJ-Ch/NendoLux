function loadUserData() {
    const datos = JSON.parse(localStorage.getItem('perfil'));

    if (!datos) {
        alert('No hay datos guardados.');
        return;
    }

    const bienvenida = document.getElementById('welcomeToNendoLux');
    bienvenida.innerHTML = `Bienvenido/a ${datos.tratamiento} ${datos.nombre}`;
}

// Llama a la función cargarDatos cuando la página se carga
window.onload = loadUserData;