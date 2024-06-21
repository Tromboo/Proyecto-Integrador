


document.addEventListener("DOMContentLoaded", function (){
    document.querySelector('#formulario').addEventListener('submit', function(e){
        e.preventDefault();

    let email = document.querySelector("#email");
    let validacionEmail = document.querySelector(".validacionEmail");

    if (email.value === '') {
        validacionEmail.innerText = 'Por favor complete el campo';
    } else {
        validacionEmail.innerText = '';
    }


let contraseña = document.querySelector("#contraseña");
let validacionContraseña = document.querySelector(".validacionContraseña");

    if (contraseña.value === '') {
        validacionContraseña.innerText = 'Por favor complete el campo';
    } else if (contraseña.value.length < 6 ) {
        validacionContraseña.innerText = 'Debe ingresar al menos 6 caracteres';
    } else {
        validacionContraseña.innerText = '';
    }

let confirmarContraseña = document.querySelector("#confirmarContraseña");
let confirmacionContraseña = document.querySelector(".confirmacionContraseña");

    if (confirmarContraseña.value == contraseña.value) {
        confirmacionContraseña.innerText = '';
    } else {
        confirmacionContraseña.innerText = 'Las contraseñas no coinciden';
    }

    let terminos = document.querySelector("#terminos")
    let validacionTerminos = document.querySelector(".validacionTerminos")
    if (!terminos.checked){
        validacionTerminos.innerText = 'Debe aceptar los términos y condiciones'
    } else {
        validacionTerminos.innerText = '';
    }

    if (email.value !== '' & contraseña.value.length >= 6 & confirmarContraseña.value === contraseña.value & terminos.checked) {
        window.location.href = './login.html';
    }
})
})




    