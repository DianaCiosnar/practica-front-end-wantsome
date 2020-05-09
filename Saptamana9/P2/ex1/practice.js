//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda
const testId = document.getElementById("test")
testId.style.backgroundColor = 'red';

const classTest = document.getElementsByClassName('test')
classTest[0].style.backgroundColor = 'blue';
classTest[1].style.backgroundColor = 'green';

const tagSection = document.getElementsByTagName('section');
tagSection[0].style.backgroundColor = 'yellow';
tagSection[1].style.backgroundColor = 'pink';