const loginButton = document.querySelector('.login-button');
const mobileLoginButton = document.querySelector('.mobile-login-button');
const userEmailElement = document.getElementById('user-email');
const userEmail = sessionStorage.getItem('userEmail'); // Obtener el correo del almacenamiento

if (userEmail) {
    userEmailElement.textContent = userEmail; // Mostrar el correo
    loginButton.textContent = 'Cerrar Sesión'; // Cambiar texto del botón
    mobileLoginButton.textContent = 'Cerrar Sesión'; // Cambiar texto del botón
}


loginButton.addEventListener('click', () => {
    sessionStorage.clear(); // Limpiar almacenamiento
    window.location.href = 'login.html'; // Redirigir al login
});

function selectProfile(profileName) {
    sessionStorage.setItem('selectedProfile', profileName);
    window.location.href = 'citas.html';
}

const menuButton = document.querySelector('.mobile-menu-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

mobileLoginButton.addEventListener('click', () => {
    sessionStorage.clear(); // Limpiar almacenamiento
    window.location.href = 'login.html'; // Redirigir al login
});

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Alterna la clase 'open'
    overlay.classList.toggle('active'); // Muestra o esconde el overlay
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Cierra el menú
    overlay.classList.remove('active'); // Esconde el overlay
});

