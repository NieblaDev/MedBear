document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar
    const email = document.getElementById('email').value.trim(); // Obtener correo
    if (email) {
        sessionStorage.setItem('userEmail', email); // Guardar correo
        window.location.href = 'loadingscreen.html'; // Redirigir a carga
    } else {
        alert('Por favor ingresa un correo válido.');
    }
});


document.querySelector('.back-button').addEventListener('click', () => {
    window.location.href = 'perfiles.html';
    sessionStorage.clear();
});
