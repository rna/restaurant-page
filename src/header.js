const header = () => {
  const header = document.createElement('header');
  const headerLogo = document.createElement('h1');
  headerLogo.innerHTML = 'The Restaurant';
  header.appendChild(headerLogo);

  const headerNav = document.createElement('nav');
  headerNav.innerHTML = '<ul><li id="home">Home</li><li id="menu">Menu</li><li id="contact">Contact</li></ul>';
  header.appendChild(headerNav);
  document.body.appendChild(header);
};

export default header;