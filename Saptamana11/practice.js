//CERINTE
//1

function capitalizeNames(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 2. Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca argument
function doubleEachNumber(arr) {
    doubleNumber = arr.map(double => {
        if (typeof double == "number") {
            return double * 2;
        }
        return double;
    });
    return doubleNumber;
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala'])); // [4, “5”, 200, “100”, “blalblala”]

// 3. 

function getPersonsNames(arr) {
    const person = arr.map(namePerson => `${namePerson.name} ${namePerson.surname}`
    );
    return person;
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));

//4 are o eroare dar nu stiu de unde
/* function computeExamPass(arr) {
    const examPass = arr.map(mark => {
        if (mark.grade >= 5) {
            return mark.name + "has passed the exam";
        }
        else { return mark.name + "has not passed the exam" };
        return examPass;
    });

    console.log(computeExamPass([
        {
            name: "Angelina",
            surname: "Jolie",
            grade: 7
        },
        {
            name: "Eric",
            surname: "Jones",
            grade: 3
        }
    ]));*/

//5. Implementati functia de mai jos si utilizati rezultatul pentru a afisa elementele intr-o pagina 
function getPersonsDomElements(arr) {
    arr.forEach(person => {
        let name = document.createElement("h1");
        name.textContent = person.name + "" + person.surname;
        document.querySelector("body").appendChild(name);

        let age = document.createElement("h2");
        age.textContent = person.age;
        document.querySelector("body").appendChild(age);
    });
}
console.log(getPersonsDomElements([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));


/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];

const activeUser = myData.filter(user => user.active === true);
console.log(activeUser);

/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]

const convertDistance = distances.map(distance => {
    return distance.distance * 0.621371 + " " + "miles";
}
)
console.log(convertDistance);

const displayDistance = distances.filter(distance => distance.distance < 10000);
console.log(displayDistance);

const totalDistance = distances.reduce((acc, value) => {
    return acc + value.distance;
}, 0);
console.log(totalDistance);


// 3. Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const arrayBook = releases.map(book => ({
    id: book.id,
    title: book.title,
}))
console.log(arrayBook);

// 4. Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const ratingBook = newReleases.filter(book => book.rating >= 5).map(bookId => ({
    id: bookId.id
}));
console.log(ratingBook);

// Vreau la final sa am o lista de video ids

const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];


const idVideo = movieLists.map(video => video.videos
).flat()
    .map(movie => movie.id
    )
console.log(idVideo);

//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieList = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const filterVideo = movieList.map(video => video.videos).flat().map(item => {
    let img150 = item.boxarts.filter(boxart => boxart.width === 150);
    return {
        id: item.id,
        title: item.title,
        img: img150,
        url: item.url
    }
});
console.log(filterVideo);

//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

function moveLetters(string) {
    const changeWord = string.split("").map(word => {

        return wordReplace = word.replace(word.charAt(), String.fromCharCode(word.charCodeAt(0) + 1));
    }
    ).join("");
    return changeWord;
};
console.log(moveLetters("hello"));

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"


let changeWordCase = function (string) {
    return string.split(' ')
        .map((word, index) => {
            if (index % 2 == 0) {
                return word.toUpperCase();
            } else {
                return word.toLowerCase()
            }
        })
        .join(' ')
}
console.log(changeWordCase('hey ppl, lets learn javascript together sometime'))


// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(cats => cats.species === "cat");
console.log(allCats);

let allHumans = arr.filter(humans => humans.species === "human");
console.log(allHumans);

let allFemales = arr.filter(femeles => femeles.sex === "f")
console.log(allFemales);


let totalOfAllAges = arr.reduce((acc, value) => {
    return acc + value.age;
}, 0);
console.log(totalOfAllAges)

let averageAgeOfCats = arr.reduce((acc, value) => {
    return (acc + value.age) / arr.length;
}, 0)
console.log(averageAgeOfCats)

let averageAgeOfHumans = arr.filter(ageHumans => ageHumans.species === "human").reduce((acc, value) => {
    return (acc + value.age) / arr.length;
}, 0)
console.log(averageAgeOfHumans)

let avgLengthOfNames = arr.reduce((acc, value) => {
    return (acc + value.name.length) / arr.length;
}, 0)
console.log(avgLengthOfNames);

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const compose = (...funcs) =>
    initialArg => funcs.reduce((acc, func) => func(acc), initialArg);
const double = x => x * 2
const square = x => x * x
console.log(compose(double, square)(5));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const composeFunction = (...functions) => data =>
    functions.reduce((acc, func) => func(acc), data)
const squareNumber = item => item * item;
const doubleNum = item => item * 2;
const myFunction = composeFunction(double, square)
console.log(myFunction(10))

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

var arr1 = [4, 5, 7, 8, 14, 45, 76];
function even(a) {
    return a.filter(function (val) { return val % 2 === 0 })
}
console.log(even([4, 5, 7, 8, 14, 45, 76]));