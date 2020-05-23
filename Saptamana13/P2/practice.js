// PRE: create separate module to import fetch function(request) in index.jss
//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users"
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data));



  // PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
url = 'https://www.googleapis.com/books/v1/volumes?q=horror';





//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width", "100px");
localStorage.setItem("height" ,"100px");
localStorage.setItem("background-color" ,"green");
const local1 = localStorage.getItem('width')
const local2=localStorage.getItem("height")
const local3=localStorage.getItem("background-color")
console.log(local1);


document.querySelector(".div");