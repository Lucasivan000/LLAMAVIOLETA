// MENU HAMBURGUESA MOBILE
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('active');
    });

    nav.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    document.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});