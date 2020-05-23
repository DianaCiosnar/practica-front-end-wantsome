/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/
 function buttonEventHandler (){
     alert("ai dat click")
 }
/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/
  const textChange=document.getElementById('fname');
  textChange.onchange=()=> {
      alert("textul a fost schimbat");
  }
/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/
const changeColor=document.querySelector('input');
const pSelect=document.querySelector('p');

const newColor=()=>{
    let colors=['red','blue','yellow','green'];
    let randomColor=colors[Math.floor(Math.random()=4)]
    pSelect.style.color=colors[Math.floor(Math.random)*4]
    console.log(randomColor)
}
textChange.addEventListener('keydown', newColor);