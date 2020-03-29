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