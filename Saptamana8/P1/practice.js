////Ex1 Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

let sum = (a, b) => {
    if (a != b) {
         return a + b;
    }
    return (a + b) * 5;
}
console.log(sum(2, 5));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

let trueOrFalse = (a, b) => {
    if (a === 30 && b === 30) {
        return true;
    }
    else if ((a + b) === 30) {
        return true;
    }
    else return false;
}
console.log(trueOrFalse(15, 15));

 //Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

let jsStr = (str) => {
    if (str.includes("JS")) {
        return str;
    }
    else return `JS ${str}`;
}
console.log(jsStr('JSCRIPT'));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar

let duplicate = (string) => {
    var uniqueCharacters = '';
    for (i = 0; i < string.length; i++) {
        if (uniqueCharacters.indexOf(string[i]) == -1) {
            uniqueCharacters += string[i];
        }
    }
    return uniqueCharacters;
}
console.log(duplicate('Diana'));


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

let findLongestWord = (string) => {
    let strSplit = string.split(' ');
    let longestWord = 0;
    for (i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strSplit[longestWord].length) {
            longestWord = i;
        }
    };
    return strSplit[longestWord];
}
console.log(findLongestWord("Wantsome is Awsomeeee today"));


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

//ex7
const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;
}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

let calculate = (number1, number2, operator) => {
    if (operator === "add") {
        return number1 + number2;
    }
    else if (operator === "substract") {
        return number1 - number2;
    }
    else if (operator === "multiply") {
        return number1 * number2;
    }
    else if (operator === "divide") {
        return number1 / number2;
    }
}
console.log(calculate(1, 2, "multiply"));

 //Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

let divide = (number) => {
    if (number % 3 == 0) {
        return "THREE";
    }
    else if (number % 5 == 0) {
        return "FIVE";
    }
    else if (number % 3 == 0 && number % 5 == 0) {
        return "BOTH";
    }
}
console.log(divide(5));

 //ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

let pinCode = (pin) => {
    if (pin.length == 4 || pin.length == 6) {
        if (isNaN(pin)) {
            return false;
        }
        else return true;
    }
    return false;
}
console.log(pinCode('1344'));

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

let hasVowels = (string) => {
    let word = string.toLowerCase()
    let characterArray = string.split("")
    return characterArray.map(character => {
        if (/[aeiouyAEIOUY]/.test(character)) {
            character = ""
        } else { return character }
    }).join("")
}
console.log(hasVowels('DIANA'))

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

let isPerfectSquare = (number) => {
    for (i = 1; i * i <= number; i++) {
        if ((number % i == 0) && (number / i == i)) {
            return true;
        }
    }
    return false;
}
console.log(isPerfectSquare(25));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

let checkAnagrama = (string1, string2) => {
    let characterString1 = string1.split('');
    let characterString2 = string2.split('');
    for (i = 0; i < characterString1.length; i++) {
        for (j = 0; j < characterString2.length; j++) {
            if (characterString1[i] === characterString2[j]) {
                return true;
            }
        } return false;
    }
}
console.log(checkAnagrama("silent", "listen"));