//1. Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
//numarul [index]” - Scrieti codul in doua variante

function checkIndex(index) {

    for (i = 0; i < index; i++) {
        console.log("Sunt la iteratia" + i)
    }
}
checkIndex(3);


function checkIndex(index) {
    var i = 0;
    while (i < index) {
        console.log("Sunt la iteratia" + i);
        i++;
    }
}

checkIndex(4);


  //2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
  //Scrieti codul in doua variante
  
function student(name) {
    for (i = 0; i < name.length; i++) {
        console.log(i + ". " + name[i]);
    }
}
student(['DIANA', 'IOANA']);


function student(name) {
    i = 0;
    while (i < name.length) {
        console.log(i + ". " + name[i]);
        i++;
    }
}
student(['ANCA', 'ANA']);

  
  // 3.Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
  //scrieti codul in doua variante
  
function student(object) {
    for (var key in object) {
        console.log(key + ': ' + object[key] + '');
    }
}
student({ name: 'Ana', age: 27 });
  
  
  //Cerinte:
  //1. 0 100 200 300 400 500 600 700 800 900 1000
  //2. 1 2 4 8 16 32 64 128
  //3. 0 2 4 6 8 10
  //4. 3 6 9 12 15
  //5. 9 8 7 6 5 4 3 2 1 0
  //6. 1 1 1 2 2 2 3 3 3 4 4 4
  //7. 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
  
  
for (i = 0; i <= 10; i++) {
    var index = i * 100;
    console.log(index);
}
  
for (i = 1; i <= 128; i = i * 2) {
    console.log(i);
}
  
for (i = 0; i <= 5; i++) {
    var index = i * 2;
    console.log(index);
}
     
for (i = 1; i <= 5; i++) {
    var index = i * 3;
    console.log(index);
}

for (i = 9; i < 10 && i >= 0; i--) {
    console.log(i);
}
  
  
for (i = 0; i <= 4; i++) {
    for (j = 0; j <= 4; j++) {
        console.log(j);
    }
}
   
  
  //Cerinta:
  //Implementati functia computeSumOfArrayElements.
  //Trebuie sa:
  //● accepte ca argument un array format din numere
  //● returneze suma numerelor din array
  //● foloseasca instructiunea while
  
function computeSumOfArrayElements(array) {
    var i = 0;
    var sum = 0;
    while (i < array.length) {
        sum += array[i];
        i += 1;
    }
    return sum;
}
console.log(computeSumOfArrayElements([1, 2, 3, 4]));
  
  //1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va raporta acest lucru in consola. (exemplu: “2 este numar par”);
  //Scrieti functia in doua variante: while si for
  //verificam daca restul impartirii numarului la 2 este 0
  
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + "" + "este par")
    }
    else {
        console.log(i + "" + "este impar")
    }
}
  
  
   //2.Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
  //rezultatul. (exemplu: “3*9=27”).
   //Scrieti functia in doua variante: while si for
//CAZ1
for (i = 0; i <= 10; i++) {
    var multiply = i * 9;
    console.log(multiply);
}

//CAZ2
i = 0;
while (i <= 10) {
    var multiply = i * 9;
    console.log(multiply);
    i++;
}
  
  
  //3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
  //(exemplu: 1 * 0 = 0
  // 1 * 1 = 1
  // …
  // 1 * 10 = 10 )
  //Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.
  
for (i = 0; i <= 10; i++) {
    for (j = 0; j <= i; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
}
  
  
  //4.Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei  dezvoltate la tema anterioara ! 
//EXECUTA CODUL LA INFINIT-IAR DACA II PUN RETURN DA EROARE SI NU MAI EXECUTA NIMIC
  /*for (i = 0; i <= 10; i++) {
    if (i >= 1 && i < 3) {
        console.log("Calificativul corespunzator punctajului" + " " + i + " " + "este E");
    }
    else if (i >= 3 && i <= 6) {
        console.log("Calificativul corespunzator punctajului" + " " + i + " " + "este D");
    }
    else if (i >= 7 && i <= 8) {
        console.log("Calificativul corespunzator punctajului" + " " + i + " " + "este B");
    }
    else if (i = 9) {
        console.log("Calificativul corespunzator punctajului" + " " + i + " " + "este A");
    }
    else if (i = 10) {
        console.log("Calificativul corespunzator punctajului" + " " + i + " " + "este A+");
    }
} */
    

