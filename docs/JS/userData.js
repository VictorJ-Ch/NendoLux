
function saveUserData() {
    const tratamiento = document.getElementById('tratamiento').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;
    const terminos = document.getElementById('terminos').checked;

    const datos = {
        tratamiento: tratamiento,
        nombre: nombre,
        apellido: apellido,
        fecha: fecha,
        terminos: terminos
    };

    localStorage.setItem('perfil', JSON.stringify(datos));
    alert('Datos guardados correctamente.');

    window.location.href = '../Auth/user.html';
}

function printUserData() {
    const datos = JSON.parse(localStorage.getItem('perfil'));

    if (!datos) {
        alert('No hay datos guardados.');
        return;
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p><strong>Tratamiento:</strong> ${datos.tratamiento}</p>
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Apellido:</strong> ${datos.apellido}</p>
        <p><strong>Fecha:</strong> ${datos.fecha}</p>
        <p><strong>Términos y Condiciones:</strong> ${datos.terminos ? 'Aceptados' : 'No aceptados'}</p>
    `;
}
