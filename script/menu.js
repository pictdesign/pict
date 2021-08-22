const menuButton = document.querySelector('.menu-button');
const menuClosed = document.querySelector('.menu-closed');
const header = document.querySelector('.header');
const content = document.querySelector('.content');
const overlay = document.querySelector('.menu-button__overlay');

const menuToggle = () => {
  menuButton.classList.toggle('menu-button_active');
  header.classList.toggle('header_opened');
  overlay.classList.toggle('menu-button__overlay_active');
}

menuButton.addEventListener('click', menuToggle);

overlay.addEventListener('click', menuToggle);




