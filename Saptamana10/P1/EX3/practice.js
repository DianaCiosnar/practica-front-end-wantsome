//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

 //3
// Bonus: faceti sa functioneze si la key press pe langa click

const sqrBtn=document.querySelector("#sqr-btn");
const sqrNum=()=>{
  const number=document.querySelector("#square").value;
  alert(number*number);
}
sqrBtn.addEventListener('click',sqrNum);

const halfBtn=document.querySelector("#half-btn");
const halfNum=()=>{
    const number=document.querySelector("#half").value;
    alert(number/2);
}
halfBtn.addEventListener("click", halfNum);


const percentBtn=document.querySelector("#prc-btn");
const percentNum=()=>{
    const number1=document.querySelector("#percent1").value;
    const number2=document.querySelector("#percent2").value;
    alert(number1*100/number2);
}
percentBtn.addEventListener("click", percentNum);

const areaBtn=document.querySelector("#area-btn");
const areaCircle=()=>{
    const number=document.querySelector("#area").value;
    alert(number*number);
}
areaBtn.addEventListener("click", areaCircle);