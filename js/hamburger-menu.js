const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-navigation');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('show');
});
