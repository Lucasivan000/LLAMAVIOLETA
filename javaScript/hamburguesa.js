document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    // abrir / cerrar menú
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // delegación de eventos
    navLinks.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        // dejamos que el navegador navegue
        navLinks.classList.remove('active');
    });
});