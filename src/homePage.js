import tableImg from './images/restaurant-table.jpg';
import './style.css';

const homePage = () => {

  //Header
  let header = document.createElement('header');
  let headerLogo = document.createElement("h1");
  headerLogo.innerHTML = "The Restaurant";
  header.appendChild(headerLogo);

  let headerNav = document.createElement("nav");
  headerNav.innerHTML = `<ul><li id="home">Home</li><li id="menu">Menu</li><li id="contact">Contact</li></ul>`;
  header.appendChild(headerNav);
  document.body.appendChild(header);

  //content
  let contentElement = document.getElementById("content");
  let heading = document.createElement("h1");
  heading.innerHTML = "THE BEST PLACE TO KICK OF YOUR DAY";
  let homeImg = document.createElement('img');
  homeImg.src = tableImg;

  contentElement.appendChild(homeImg);
  contentElement.appendChild(heading);

  let about = document.createElement("p");

  about.innerHTML = `On her way she met a copy. The copy warned the Little Blind Text, that
  where it came from it would have been rewritten a thousand times and
  everything that was left from its origin would be the word "and" and the
  Little Blind Text should turn around and return to its own, safe
  country. A small river named Duden flows by their place and supplies it
  with the necessary regelialia. It is a paradisematic country, in which
  roasted parts of sentences fly into your mouth.`;
  
  contentElement.appendChild(about);

  contentElement.insertBefore(header,contentElement.firstChild);
};

export default homePage;