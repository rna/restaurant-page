import tableImage from './images/restaurant-table.jpg';

const homePage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'homeContent';
  const heading = document.createElement('h1');
  heading.innerHTML = 'THE BEST PLACE TO KICK OF YOUR DAY';
  const homeImg = document.createElement('img');
  homeImg.src = tableImage;

  contentElement.appendChild(homeImg);
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

export default homePage;