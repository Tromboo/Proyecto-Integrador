document.addEventListener("DOMContentLoaded", function (){
    let email = document.querySelector("#email");
    let validacionEmail = document.querySelector(".validacionEmail");
    email.addEventListener('input', function() {
        if (email.value === '') {
            validacionEmail.innerText = 'Por favor escriba su email';
        } else {
            validacionEmail.innerText = '';
        }
    })
    
   let confirm = document.querySelector("#confirm")
   let recuperacionContraseña = document.querySelector(".recuperacionContraseña")
   confirm.addEventListener('input', function() {
        if (confirm.checked) {
            recuperacionContraseña.innerText = ''
        } else {
            recuperacionContraseña.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña'
        }

        
    



   })
    
    
    })