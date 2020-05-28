//Cerinte:
// 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de comparatie. Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

function minim(number) {
    return new Promise(function (resolve, reject) {

            if (number < 10) {
                resolve(number);
            } else{
                reject(number);
            }
    })
}
minim(7).then(response => {
    console.log(`${response}`+" este mai mic decat 10");
}).catch(response=>{
    console.log(`${response}`+" este mai mare decat 10")
})


//2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri

const checkString=(string) => {
  return new Promise((resolve, reject)=>{
         if(string.includes("promise")==true) {
             resolve(string)
         } else {
             reject(string)
         }
  })
}
checkString("astazi am invatat promise").then(response => {
    console.log(`${response}`+" contine promise");
}).catch(response=>{
    console.log(`${response}`+" nu contine promise")
})


//Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
//Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
//Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseString=(inputString) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof inputString ==="string"){
                resolve(inputString.toUpperCase());
            } else {
                reject(inputString);
            }
        },3000);
    });
};
 
const promiseCorrectly = promiseString("myString");
const promiseIncorrectly = promiseString(5);
promiseCorrectly.then((result)=>{
  console.log(`Stringul uppercased este: ${result}`);
})
.catch((error)=>{
    console.log(`Stringul uppercased este: ${error}`);
  })

  promiseIncorrectly.then((result)=>{
    console.log(`Stringul uppercased este: ${result}`);
  })
  .catch((error)=>{
      console.log(`Stringul uppercased este: ${error}`);
    })

//Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
//A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
//alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(array) { 
  
    return array.replace(/\w\S*/g, function(string){return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();});
  
  
  }).then(function(array) { 
    return strSplit.sort();
  
  });