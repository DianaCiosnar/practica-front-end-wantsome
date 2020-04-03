//6.Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
function sortedArray(array) {
    array.sort(function (a, b) {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });
}
console.log(sortedArray([[5, 700], [120, 100], [500, 400]]));

//7. Implementati o functie care face reverse la un string
//facem spilt la string pe litere
//facem reverse la acesta pentru a inversa literele
//facem join pentru a forma cuvantul
//afisam rezultatul obtinut

function reverseString(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("hello"));

//8. Implementati o functie care calculeaza factorialul unui numar
function factorialNumber(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorialNumber(number - 1);

}
console.log(factorialNumber(5));


//9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function checkString(string1, string2) {
    if (string1.endsWith(string2)) {
        return true;
    }
    return false;
}
console.log(checkString("ana", "na"));

// 10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat

function display(array, checknumber) {
    for (i = 0; i < array.length; i++) {
        checknumber(array[i]);
    }
}

function testNumber(number) {
    if (number === 7) {
        console.log(number);
    }
}
display([1, 2, 3, 5, 7], testNumber);

//11 Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string

function string(string1, string2) {
    for (i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) != -1) {
            return true;
        }
        return false;
    }
}
console.log(string("ana", "diana"));

//12.Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata

function value(array, str) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if (str != array[i]) {
            newArray += array[i];
        }
    } 
}
console.log(value([1, 2, 3], 3));

//13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function myArray(array) {
    var result = [];
    for (i = 0; i <= array.length; i++) {
        result.push(Boolean(array[i]))
    }
    console.log(array);
}
console.log(myArray[0, null, undefined, NaN, false, ""]);

//14. Scrieti o functie care repeta un string de n ori specificate

function repeat(string, number) {
    console.log(string + string.repeat(number));
}
repeat('diana', 5);


