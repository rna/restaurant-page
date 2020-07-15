const header = () => {

  let header = document.createElement('header');
  let headerLogo = document.createElement("h1");
  headerLogo.innerHTML = "The Restaurant";
  header.appendChild(headerLogo);

  let headerNav = document.createElement("nav");
  headerNav.innerHTML = `<ul><li id="home">Home</li><li id="menu">Menu</li><li id="contact">Contact</li></ul>`;
  header.appendChild(headerNav);
  document.body.appendChild(header);
};

export default header;