document.getElementById('catalogo-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const myAccount = document.getElementById('myAccount');
    myAccount.classList.toggle('d-none');
});