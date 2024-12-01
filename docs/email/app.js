const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_tkq62fw';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
        alert('Mensaje Enviado Correctamente!');
    }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
    });
});

function habilitarSiguiente() 
{ 
    document.getElementById("siguiente").disabled = false; 
} 
function cambiarPagina() 
{ 
    if (!document.getElementById("siguiente").disabled) 
        { 
            window.location.href = "../Envio/envio.html"; 
        } 
}