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

function openModal(card) {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
    modal.classList.remove('hidden');

    const modalTitle = card.querySelector('h3').textContent;
    document.getElementById('modal-header').textContent = modalTitle;

    const rows = modal.querySelectorAll('td');
    rows[0].textContent = Math.floor(Math.random() * 10000000000);
    rows[1].textContent = card.querySelector('p5').textContent; //fecha
    rows[2].textContent = card.querySelector('p4').textContent; //hora
    rows[3].textContent = card.querySelector('p1').textContent; //lugar
    rows[4].textContent = card.querySelector('p3').textContent; //medico
    rows[5].textContent = card.querySelector('h3').textContent; //especialidad
    rows[7].textContent = 'Presencial'; //tipo de consulta
    rows[7].textContent = card.querySelector('p2').textContent; //motivo
    rows[8].textContent = ''; //diagnostico
    rows[9].textContent = ''; //interconsulta
    rows[10].textContent = ''; //anotaciones
    rows[11].textContent = 'No hay imágenes adjuntas.'; //imagenes adjuntas
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('show');
}

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
