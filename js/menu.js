const menu = document.querySelector('.navbar');
const menuIcon = document.querySelector('#menu-icon');

if (menu && menuIcon) {
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
  });
}
