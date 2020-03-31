// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: 'Tesla',
    wheels: 4
};
car.name = 'Mercedes';
delete car.name;
console.log(car);


//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
 
var user = {
    name: "Ana",
    age: 20,
    gender: 'famale',
    hobby: "travel"
};
var userKeys = Object.keys(user);
console.log(userKeys);
var userUpperCase = userKeys.toUpperCase();
console.log(userUpperCase);
var userValues = Object.values(user);
console.log(userValues);
var userLowerCase = userValues.toLowerCase();
console.log(userLowerCase);
var result = user.name + ", " + user.age + ", " + user.gender + " ," + user.hobby + "," + "reprezinta value pentru key words name, age, gender, hobby";
console.log(result);

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var student = {
    name: "Maria",
    age: 22,
    date: function () {
        return this.name + " " + this.age;
    }
};
console.log(student.date());

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.

var house = {
    color: "green",
    model: "single"
};
var house1 = Object.assign({}, house);
house1.people = 3;
house1.city = 'Iasi';
console.log(house1);

myHouse = {
    rooms: 3,
    zone: "Bucium",
    animals: 1
}
var superHouse = Object.assign(house1, myHouse);
console.log(superHouse);

// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

var facultate = {
    student: { name: "Diana", age: 27 }
};
var studentKeys = Object.keys(facultate.student);
console.log(studentKeys);
var string = studentKeys.toString();
console.log(string + " " + "apartin obiectului student");

//Ex6
// Avem obiectul : 

myObject = {
name: "John",
surname: "Applegate",
}

//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

valuesSorted = Object.values(myObject).sort();
console.log(valuesSorted)

//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.

function student(firstName, secondName, gender) {
    this.firstName = firstName.toUpperCase();
    this.secondName = secondName.toUpperCase();
    this.gender = gender.toUpperCase();
}
var myStudent = new student("Diana", "Ciosnar", "famale");
console.log(myStudent);

//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var array = ['stundent1','stundent2','stundent3','student4','student5','student6'];
var size=array.length;
console.log(size);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result=array1.concat(array2);
console.log(result);

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var car1 = ['Car', 'Vehicle'];
var car2 = 'Toyota';
var result= Array.isArray(['Car', 'Vehicle']);
console.log(result)
var result1= Array.isArray('Toyota');
console.log(result1)

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(' and ');
console.log(result);

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
var result=cars.push('Toyota','Audi');
console.log(result);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
cars.pop();
console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
cars.unshift("Renault");
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
cars.splice(2,0,"Audi","Ford");
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20, 30, 100];
arrayNumbers.sort(function (a, b) {
    return a - b;
});
console.log(arrayNumbers);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
function sortArray(fruitsArray) {
    sortArray.sort();
}
console.log(sortArray["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]);