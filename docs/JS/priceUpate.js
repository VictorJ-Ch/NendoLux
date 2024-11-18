//Test Script 4 price update
const subtotal = 100;
const envio = 20;
const iva = 16;
const total =  subtotal + envio + iva;

document.getElementById('subtotal').textContent = `MXN $${subtotal}`;
document.getElementById('envio').textContent = `MXN $${envio}`;
document.getElementById('iva').textContent = `MXN $${iva}`;
document.getElementById('total').textContent = `MXN $${total}`;
