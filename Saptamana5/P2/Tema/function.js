/* Scrieti o functie care verifica daca un input este sau nu de tip string.*/
function is_string (input) {
    if (typeof input === "string") {
        return true;
    }
    else{
        return false;
    }
}
console.log(is_string('Ana'));

/*Scrieti o functie care verifica daca un string este gol sau nu */
function is_empty (input) {
    if (input ==="") {
        return true;
    }
    else {
        return false;
    }
}
console.log(is_empty(''));

/*Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte */
function string_to_array (string){
    return string.split('');  
}
console.log(string_to_array('curs front end'));

/*Scrieti o functie care transforma un string in forma abreviata:*/

function abbrev_name(name) {

    var split_names = name.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));

/*Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):*/
 function capitalize(name) {
     return name.charAt(0).toUpperCase() + name.slice(1)
 }
 console.log(capitalize('diana'));

 /*Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:*/
 function truncateString(string, num) {
    if (string.length <= num) {
      return string
    }
    return string.slice(0, num) + '...'
  }
  
  console.log(truncateString("Diana", 2));

  /*Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau
nu:*/
function isUpperCase(str)
{
    return str == str.toUpperCase() && str != str.toLowerCase();
}
console.log(isUpperCase('DIANA'));

/*Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:*/
function insert(string, insertString, position) {
    return string.slice(0, position) + insertString + string.slice(position);
}
console.log(insert('We are doing some exercises.','JavaScript ',18));

/*Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:*/
function remove(string){
    return string.replace("the", "");
    
}
console.log(remove("The quick brown fox jumps over the lazy dog"));

/*Scrieti o functie care compara doua string-uri case-insensitive:*/
function compare_string (string1, string2) {
    if (string1.toUpperCase()=== string2.toUpperCase())
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log(compare_string('diana','Diana'));
/*Scrieti o functie care face ca primul caracter a unui string sa fie de tip:*/

function Uncapitalize(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
   console.log(Uncapitalize('Js string exercises'));
/*Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari*/
function stringToUpperCase(string)
{
    return string.toUpperCase();
}
console.log(stringToUpperCase('DiaNa'));
/*lowerCase*/

function stringToLowerCase(string)
{
    return string.toLowerCase();
}
console.log(stringToLowerCase('DiaNa'));
/* Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
   var text1 = "Când ai un";
   var text2 = "ciocan";
   var text3 = "in mana toate lucrurile ti se par";
   var text4 = "cuie"; */

   function concat (text1,text2,text3,text4) {
       return text1.concat(' ',text2,' ',text3,' ',text4);
   }
   console.log(concat("Când ai un","ciocan","in mana toate lucrurile ti se par","cuie"));