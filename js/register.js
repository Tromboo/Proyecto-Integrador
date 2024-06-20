


document.addEventListener("DOMContentLoaded", function (){
    let email = document.querySelector("#email");
    let validacionEmail = document.querySelector(".validacionEmail");
        email.addEventListener('input', function() {
    if (email.value === '') {
        validacionEmail.innerText = 'Por favor complete el campo';
    } else {
        validacionEmail.innerText = '';
    }
})

let contraseña = document.querySelector("#contraseña");
let validacionContraseña = document.querySelector(".validacionContraseña");
contraseña.addEventListener('input', function() {
    if (contraseña.value === '') {
        validacionContraseña.innerText = 'Por favor complete el campo';
    } else if (contraseña.value.length < 6 ) {
        validacionContraseña.innerText = 'Debe ingresar al menos 6 caracteres';
    } else {
        validacionContraseña.innerText = '';
    }
})

let confirmarContraseña = document.querySelector("#confirmarContraseña");
let confirmacionContraseña = document.querySelector(".confirmacionContraseña");
confirmarContraseña.addEventListener('input', function() {
    if (confirmarContraseña.value == contraseña.value) {
        confirmacionContraseña.innerText = '';
    } else {
        confirmacionContraseña.innerText = 'Las contraseñas no coinciden';
    }
})


})




    