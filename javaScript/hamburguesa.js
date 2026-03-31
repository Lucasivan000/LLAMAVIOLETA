document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (!toggle || !nav) return;

    // Abrir / cerrar menú (touch + mouse)
    toggle.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        nav.classList.toggle('active');
    });

    // Cerrar menú al tocar un link
    links.forEach(link => {
        link.addEventListener('pointerdown', () => {
            nav.classList.remove('active');
        });
    });
});