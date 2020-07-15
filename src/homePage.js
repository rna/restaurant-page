const homePage = () => {
  
  let contentElement = document.getElementById("content");
  let header = document.createElement('h1');
  
  header.innerHTML = "The Restaurant";
  contentElement.appendChild(header);  

  let about = document.createElement('p');

  about.innerHTML = `On her way she met a copy. The copy warned the Little Blind Text, that
  where it came from it would have been rewritten a thousand times and
  everything that was left from its origin would be the word "and" and the
  Little Blind Text should turn around and return to its own, safe
  country. A small river named Duden flows by their place and supplies it
  with the necessary regelialia. It is a paradisematic country, in which
  roasted parts of sentences fly into your mouth.`;

  
  contentElement.appendChild(about);
}

export default homePage;

      // <div class="intro">
      //   <h1>THE BEST PLACE TO KICK OF YOUR DAY</h1>
      // </div>