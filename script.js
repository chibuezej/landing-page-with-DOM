// console.log(document.getElementById ("showcase-area"));

// document.title = 'Meriles page'
// console.log(document.title);
 var title = document.getElementById('big-title');
title.innerHTML='Nmeregini C Johnhenry';
let newLinks = document.getElementsByClassName('link')
console.log(newLinks);
newLinks[2].innerHTML = 'hey';


let botton = document.getElementsByClassName('btn');
console.log(botton);
botton[0].innerHTML= 'download CV'


var newInput = document.getElementsByTagName('li');
console.log(newInput[2]);
newInput[2].innerText='contact page'; 
newInput[2].style.margin= '5px'
 var bigTitle = document.getElementById('big-title');
 bigTitle.style.color='Blue';
 bigTitle.innerText = 'Nmeregini c Johnhenry';
 bigTitle.style.fontSize = '60px';
 bigTitle.style.display = 'flex';
 console.log(bigTitle);

 var paraText = document.getElementById('text');
 paraText.style.color = 'red';
