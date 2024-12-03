function SendMail() {
    var fromName = document.getElementById("name").value;
    var lastName = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var adresse = document.getElementById("adresse").value;
    var email = document.getElementById("email").value;

    console.log("From Name:", fromName);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Adresse:", adresse);
    console.log("Email:", email);

    var params = {
        from_name: fromName,
        last_name: lastName,
        phone: phone,
        adresse: adresse,
        email: email,
    };

    emailjs.send("service_seh327r", "template_tkq62fw", params)
        .then(function(response) {
            alert("We did it Yoohoooo :)" + response.status);
        })
        .catch(function(error) {
            console.error("Error:", error);
            alert("There was an error sending your email. Please try again.");
        });
}

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
        })
        .catch((err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
});

function habilitarSiguiente() { 
    document.getElementById("siguiente").disabled = false; 
} 

function cambiarPagina() { 
    if (!document.getElementById("siguiente").disabled) { 
        window.location.href = "../Envio/envio.html"; 
    } 
}
