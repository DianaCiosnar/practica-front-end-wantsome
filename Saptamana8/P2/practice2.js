//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

let sum = (number) => {
    let total = 0;
    for( i = 1; i <=number; i++){
      total += i;
    }
    return total;
}
console.log(sum(25));

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

let findLongestWord = (string) => {
    let strSplit = string.split(' ');
    let longestWord = 0;
    for (i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strSplit[longestWord].length) {
            longestWord = i;
        }
    }
    return strSplit[longestWord];
}
console.log(findLongestWord("Wantsome is Awsomeeee today"));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

let reverse = (string) => {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverse("hello"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
let replaceLetter = (str) => {
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
        }
    }
    return str;
}
console.log(replaceLetter("ana"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

let convertNumber = (number) => {
    if(number % 60 == 0) {
        return number / 60;
    }
    return Math.floor(number/60) +" "+ number % 60;
}
 console.log(convertNumber(110));

 /*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
let alfabeticString = (string) => {
    return string.toLowerCase().split('').sort().join('')
}

console.log(alfabeticString("Diana"));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

let checkLetter = (string) => {
    let splitString = string.split('');
    for (i = 0; i < splitString.length; i++) {
        if (string.charAt(i + 1) == "+") {
            return true;
        }
        return false;
    }
}
console.log(checkLetter("d+i+a+n+a"));