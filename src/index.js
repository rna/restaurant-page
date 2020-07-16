import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import header from './header';
import './style.css';


header();

function pageLoad() {
  homePage();
  menuPage();
  contactPage();

  const menu = document.getElementById('menu');
  const home = document.getElementById('home');
  const contact = document.getElementById('contact');
  const homeContent = document.getElementById('homeContent');
  const menuContent = document.getElementById('menuContent');
  const contactContent = document.getElementById('contactContent');

  menu.addEventListener('click', () => {
    homeContent.style.display = 'none';
    contactContent.style.display = 'none';
    menuContent.style.display = 'block';
  });

  home.addEventListener('click', () => {
    homeContent.style.display = 'block';
    contactContent.style.display = 'none';
    menuContent.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    homeContent.style.display = 'none';
    contactContent.style.display = 'block';
    menuContent.style.display = 'none';
  });
}

window.onload = pageLoad();