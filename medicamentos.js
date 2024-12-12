const loginButton = document.querySelector('.login-button');
const userEmailElement = document.getElementById('user-email');
const mobileLoginButton = document.querySelector('.mobile-login-button');
const userEmail = sessionStorage.getItem('userEmail'); // Obtener el correo del almacenamiento

if (userEmail) {
    userEmailElement.textContent = userEmail; // Mostrar el correo
    loginButton.textContent = 'Cerrar Sesión'; // Cambiar texto del botón
    mobileLoginButton.textContent = 'Cerrar Sesión'; // Cambiar texto del botón
    
} else {
    userEmailElement.textContent = '¿No tienes cuenta vinculada?';
    loginButton.textContent = 'Iniciar Sesión';
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedProfile = sessionStorage.getItem('selectedProfile'); // Obtén el perfil guardado
    if (selectedProfile) {
        document.getElementById('saludo').textContent = `¡Hola, ${selectedProfile}!`; // Actualiza el saludo
        document.getElementById('user-profile-image').src = `images/${selectedProfile.toLowerCase()}.webp`; // Actualiza la imagen
    } else {
        document.getElementById('saludo').textContent = '¡Hola!'; // Mensaje predeterminado si no hay perfil
    }
});

loginButton.addEventListener('click', () => {
    sessionStorage.clear(); // Limpiar almacenamiento
    window.location.href = 'login.html'; // Redirigir al login
});

const menuButton = document.querySelector('.mobile-menu-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

mobileLoginButton.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'login.html';
});

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});