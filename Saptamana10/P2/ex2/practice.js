let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

const jsonObject=JSON.parse(request.response);
console.log(jsonObject);
const colors=Object.values(jsonObject);
console.log(colors);

for(let i=0;i<colors.length;i++) {
    let body=document.querySelector("body");
    let list= document.createElement("li");
    let listItem=document.createElement("li")
    body.appendChild(list);
    list.appendChild(listItem);
    let square=document.createElement("div")
    listItem.appendChild(square);
    square.setAttribute("class","square");
    square.style.backgroundColor=colors[i]
    console.log(colors[i]);
}
