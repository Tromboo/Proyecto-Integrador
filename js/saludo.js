document.addEventListener("DOMContentLoaded", function() {
    var userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
        var header = document.querySelector('header');
        header.innerHTML = '<span>Bienvenido: ' + userEmail + '</span>';

        var enlacesMenu = document.querySelectorAll('nav a');
        enlacesMenu.forEach(function(enlace) {
            var textoEnlace = enlace.textContent.toLowerCase();
            if (textoEnlace === 'login' || textoEnlace === 'registro') {
                enlace.style.display = 'none';
            }
        });

        var logoutEnlace = '<a href="#" id="logout">logout</a>';
        header.innerHTML += logoutEnlace;

        document.getElementById('logout').addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('userEmail');
            window.location.href = './login.html';
        });
    }
});