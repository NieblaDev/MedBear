const logoutButton = document.querySelector('.logout-button');
const userEmailElement = document.getElementById('user-email');
const userEmail = sessionStorage.getItem('userEmail'); // Obtener el correo del almacenamiento

if (userEmail) {
    userEmailElement.textContent = userEmail; // Mostrar el correo
    logoutButton.textContent = 'Cerrar Sesión'; // Cambiar texto del botón
    
} else {
    userEmailElement.textContent = '¿No tienes cuenta vinculada?';
    logoutButton.textContent = 'Iniciar Sesión';
}

logoutButton.addEventListener('click', () => {
    sessionStorage.clear(); // Limpiar almacenamiento
    window.location.href = 'login.html'; // Redirigir al login
});


function selectProfile(profileName) {
    sessionStorage.setItem('selectedProfile', profileName);
    window.location.href = 'citas.html';
}
