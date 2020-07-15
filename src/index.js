import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import header from "./header";
import './style.css';


header();

window.onload = function(){
  homePage();
  menuPage();
  contactPage();

  let menu = document.getElementById("menu");
  let home = document.getElementById("home");
  let contact = document.getElementById("contact");
  let homeContent = document.getElementById("homeContent");
  let menuContent = document.getElementById("menuContent");
  let contactContent = document.getElementById("contactContent");

  menu.addEventListener('click',()=>{
    homeContent.style.display = "none";
    contactContent.style.display = "none";
    menuContent.style.display = "block";
  });

  home.addEventListener('click',()=>{
    homeContent.style.display = "block";
    contactContent.style.display = "none";
    menuContent.style.display = "none";
  });

  contact.addEventListener('click',()=>{
    homeContent.style.display = "none";
    contactContent.style.display = "block";
    menuContent.style.display = "none";
  });
}
