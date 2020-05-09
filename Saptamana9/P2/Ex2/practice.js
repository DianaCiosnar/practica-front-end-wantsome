// Adaugati un tag script la final

const body= document.querySelector('body');
const script = document.createElement('script');
script.src = 'practice1.js' ;
body.appendChild(script);

// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
const font = document.querySelector('body');
font.style.fontFamily='Impact,Charcoal,sans-serif';

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
 const spanName = document.querySelector("#name");
 spanName.innerText ="Diana Ciosnar";

 const drink = document.querySelector("#fav-drink");
 drink.innerText = "Wine";

 const bornPlace = document.querySelector("#born-place");
 bornPlace.innerText = "Suceava";

 // Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
 const list = document.querySelectorAll("li")
 for(let li of list) {
     li.className = "listitem"
 }
 // Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra
  const img = document.createElement('img');
  img.src = "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg";
  document.body.appendChild(img);