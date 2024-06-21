document.addEventListener("DOMContentLoaded", function() {
    let userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
        let header = document.querySelector('header');
        let bienvenida = document.createElement('p');
        bienvenida.textContent = 'Bienvenido: ' + userEmail;
        header.appendChild(bienvenida);

        let login = document.getElementById('usuario');
        if (login) login.style.display = 'none';

        let Registro = document.getElementById('usuario2');
        if (Registro) Registro.style.display = 'none';

        let logoutEnlace = document.createElement('a');
        logoutEnlace.id = 'logout';
        logoutEnlace.textContent = 'Logout';
        header.appendChild(logoutEnlace);

        document.getElementById('logout').addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('userEmail');
            window.location.href = './login.html';
        });
    }
});