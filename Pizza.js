// toggle
const navbarLink = document.querySelector('.nav-link');

// navbar #menu-icon di klik
document.querySelector('#menu-icon').onclick = () => {
    navbarLink.classList.toggle('active');
} 