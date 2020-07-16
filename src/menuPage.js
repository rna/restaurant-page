import menuImage from './images/food-menu.jpg';

const menuPage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'menuContent';
  const heading = document.createElement('h1');
  heading.innerHTML = 'THE DELICIOUS DISHES';
  const menuImg = document.createElement('img');
  menuImg.src = menuImage;

  contentElement.appendChild(menuImg);
  contentElement.appendChild(heading);

  const about = document.createElement('p');

  about.innerHTML = `On her way she met a copy. The copy warned the Little Blind Text, that
  where it came from it would have been rewritten a thousand times and
  everything that was left from its origin would be the word "and" and the
  Little Blind Text should turn around and return to its own, safe
  country. A small river named Duden flows by their place and supplies it
  with the necessary regelialia. It is a paradisematic country, in which
  roasted parts of sentences fly into your mouth.`;

  contentElement.appendChild(about);
  document.body.appendChild(contentElement);
};

export default menuPage;