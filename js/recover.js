
document.addEventListener("DOMContentLoaded", function (){
    document.querySelector('#recoverForm').addEventListener('submit', function(e){
        e.preventDefault();

    let email = document.querySelector("#email");
    let validacionEmail = document.querySelector(".validacionEmail");

    if (email.value === '') {
        validacionEmail.innerText = 'Por favor escriba su Email';
    } else {
        validacionEmail.innerText = '';
    }

    let terminos = document.querySelector("#confirm")
    let recuperarContraseña = document.querySelector(".recuperarContraseña")
    if (!terminos.checked){
        recuperarContraseña.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña'
    } else {
        recuperarContraseña.innerText = '';
    }

let alert = document.querySelector("#alert")
let vuelta = document.querySelector(".vuelta")
    if (email.value !== '' && terminos.checked) {
    alert.innerText = 'Recibiras un email con las instrucciones para recuperar tu contraseña';
    vuelta.style.display = 'block';
    }
})
})