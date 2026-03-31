document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!menuToggle || !navLinks) return;

    // Abrir / cerrar menú (touch + mouse)
    menuToggle.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Cerrar menú al seleccionar un link
    navItems.forEach(item => {
        item.addEventListener('pointerdown', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
});