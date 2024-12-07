document.querySelector('.logout-button').addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
});

const userEmailElement = document.getElementById('user-email');
const userEmail = sessionStorage.getItem('userEmail'); // Obtener el correo del almacenamiento

document.addEventListener('DOMContentLoaded', () => {
    const selectedProfile = sessionStorage.getItem('selectedProfile'); // Obtén el perfil guardado
    if (selectedProfile) {
        document.getElementById('saludo').textContent = `¡Hola, ${selectedProfile}!`; // Actualiza el saludo
        document.getElementById('user-profile-image').src = `images/${selectedProfile.toLowerCase()}.webp`; // Actualiza la imagen
    } else {
        document.getElementById('saludo').textContent = '¡Hola!'; // Mensaje predeterminado si no hay perfil
    }
});

if (userEmail) {
    userEmailElement.textContent = userEmail; // Mostrar el correo
    logoutButton.textContent = 'Cerrar Sesión'; // Cambiar texto del botón
    
} else {
    userEmailElement.textContent = '¿No tienes cuenta vinculada?';
    logoutButton.textContent = 'Iniciar Sesión';
}
