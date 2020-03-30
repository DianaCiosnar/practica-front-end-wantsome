//Cerinta:
//1. Scrieti o functie de tip named function denumita greatestNrBetween care:
//- Primeste ca argumente doua numere
//- Returneaza numarul care este mai mare
//Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestNrBetween(number1, number2) {
    if (number1 > number2) {
        console.log(' Numarul mai mare dintre' + " " + number1 + " " + 'si' + " " + number2 + " " + 'este' + " " + number1);
    } else {
        console.log(' Numarul mai mare dintre' + " " + number1 + " " + 'si' + " " + number2 + " " + 'este' + " " + number2);
    }
}
greatestNrBetween(3, 8);

   //Cerinta:
   //2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
   //- Primeste ca argument codul unei limbi: “en”, “es”, “de”
   //- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
   //- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
   //Apelati functia pentru fiecare caz in parte.
   
   
var helloWorldInLang = function (lang) {
    switch (lang) {
        case "en":
            console.log("Hello World");
            break;
        case "es":
            console.log("HOLA MUNDO");
            break;
        case "de":
            console.log("HALLO WELT");
            break;
        default:
            console.log("Hello World");
    }
}
console.log(helloWorldInLang("es"));
   
   //Cerinta:
   //3. Scrieti o functie numita pluralizeWord care:
   //- accepta doua argumente: un substantiv in engleza si un numar
   //- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
   //- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 
   
function pluralizeWord(string, number) {
    if (string === 'sheep') {
        console.log(number + " " + "sheep")
        return;
    }
    if (string === 'goose' && number > 1) {
        console.log(number + " " + "geese")
        return;
    }
    if (number > 1) {
        console.log(number + " " + string + "s");
    } else {
        console.log(number + " " + string)
    }
}

pluralizeWord('goose', 2);
   
   
   //Cerinta:
   //4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
   //corespunzatoare considerand urmatoarele criterii:
   //- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
   //- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
   //- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
   //Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y
    
function salary(venit) {
    if (venit <= 30000) {
        console.log("taxa este 0 pentru salariu de " + " " + venit);
    }
    else if (venit >= 50000 && venit <= 99999) {
        var tax = venit * 0.35;
        console.log("Pentru un venit anual de" + " " + venit + " " + "aveti de platit taxe in valoare de" + " " + tax);

    }
    else if (venit > 100000) {
        var tax = venit * 0.4
        console.log("Pentru un venit anual de" + " " + venit + " " + "aveti de platit taxe in valoare de" + " " + tax)
    }
}
salary(60000);

   //Cerinta:
   //5. Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
   //afiseaza:
   //- AA if points is greater than 90
   //- AB if points is greater than 80 and less than or equal to 90
   //- BB if points is greater than 70 and less than or equal to 80
   //- BC if points is greater than 60 and less than or equal to 70
   //- CC if points is greater than 50 and less than or equal to 60
   //- CD if points is greater than 40 and less than or equal to 50
   //- DD if points is greater than 30 and less than or equal to 40
   //- FF if points is less than or equal to 30
   
function param(points) {
    if (points > 90) {
        console.log("AA");
    }
    else if (points > 80 && points < 90) {
        console.log("AB");
    }
    else if (points > 70 && points < 80) {
        console.log("BB");
    }
    else if (points > 60 && points < 70) {
        console.log("BC");
    }
    else if (points > 50 && points < 60) {
        console.log("CC");
    }
    else if (points > 40 && points < 50) {
        console.log("CD");
    }
    else if (points > 30 && points < 40) {
        console.log("DD");
    }
    else if (points < 30) {
        console.log("FF");
    }
}
param(40);
   
   //Cerinta:
   //6. Scrieti o functie care testeaza daca o anumita data introdusa este in weekend:
   //Test Data :
   //console.log(is_weekend('Nov 15, 2014'));
   //console.log(is_weekend('Nov 16, 2014'));
   //console.log(is_weekend('Nov 17, 2014'));
   //Output :
   //"weekend"
   //"weekend"
   //undefined
   
var isWeekend = new Date();
if (isWeekend.getDay() == 6 || isWeekend.getDay() == 0);
console.log("weekend")
console.log(new Date('Nov 15, 2014'))
   
   
   //1. 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".
   
function gender(cnp) {
    if (cnp[0] == 1) {
        console.log("Persoana este de sex M")
    }
    else if (cnp[0] == 2) {
        console.log("persoana este de sex F")
    }
}
gender('1920404336692');
   
   
    
   //2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
   //- 1-3 = E
   //- 3-6 = D
   //- 7-8 = B
   //- 9 = A
   //- 10 = A+
   //Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".
   
var calificativ = function (number) {
    switch (number) {
        case (number >= 1 && number < 3):
            console.log("Calificativul corespunzator punctajului" + " " + number + " " + "este E");
            break;
        case (number >= 3 && number <= 6):
            console.log("Calificativul corespunzator punctajului" + " " + number + " " + "este D");
            break;
        case (number >= 7 && number <= 8):
            console.log("Calificativul corespunzator punctajului" + " " + number + " " + "este B");
            break;
        case (number = 9):
            console.log("Calificativul corespunzator punctajului" + " " + number + " " + "este A");
            break;
        case (number = 10):
            console.log("Calificativul corespunzator punctajului" + " " + number + " " + "este A+");
            break;
    }
}

console.log(calificativ(9));

   
   //3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. Una dintre implementari trebuie sa fie bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )
  //Caz 1
function country(marca) {
    switch (marca) {
        case 'Toyota':
            console.log(marca + " " + "se produce in Japonia")
            break;
        case 'Audi':
            console.log(marca + " " + "se produce in Germania")
            break;
        case 'Volkswagen':
            console.log(marca + " " + "se produce in Germania")
            break;
        case 'Dacia':
            console.log(marca + " " + "se produce in Romania")
            break;
        case 'Ford':
            console.log(marca + " " + "se produce in SUA")
            break;
        case 'Renault':
            console.log(marca + " " + "se produce in Romania")
            break;
        default:
            console.log("Marca necunoscuta")
    }

}
country("Ford")
   
   // CAZ 2

var country = function (marca) {
    if (marca === 'Dacia') {
        console.log(marca + " " + "se produce in Romania")
    }
    else if (marca === 'Renault') {
        console.log(marca + " " + "se produce in Romania")
    }
    else if (marca === 'Audi') {
        console.log(marca + " " + "se produce in Germania")
    }
    else if (marca === 'Volkswagen') {
        console.log(marca + " " + "se produce in Germania")
    }
    else if (marca === 'Toyota') {
        console.log(marca + " " + "se produce in SUA")
    }
    else {
        console.log("Marca este necunoscuta")
    }
}

country("Toyota");

   
   //CAZ 3
   
function country(marca) {
    var object = {
        'Toyota': 'Japonia',
        'Renault': 'Romania',
        'Dacia': 'Romania',
        'Audi': 'Germania ',
        'Ford': 'SUA',
        'Volswagen': 'Germania',
        'default': 'marca nu este cunoscuta'
    }
    return 'Marca este produsa in' + " " + (object[marca] || object['default']);
}

var findCountry = country('Ford');

console.log(findCountry);



   
   //4. Scrieti o functie de tip IIFE care:
   //- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
   //- afiseaza in consola array-ul sortat
   
var cars = [
    { name: "John", salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
];

cars.sort((a, b) => (a.salary > b.salary) ? 1 : -1)

console.log(cars);
