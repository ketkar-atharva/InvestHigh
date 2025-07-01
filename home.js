let first=localStorage.getItem('intro');
let n=document.getElementById("Name");
n.textContent=first;


let val=localStorage.getItem('invest');
let inval=document.getElementById("invalue");
inval.innerHTML=val;

let fd=localStorage.getItem('fd');
let fdval=document.getElementById("dpvalue");
fdval.innerHTML=fd;

let mufd=localStorage.getItem('mu');
let mval=document.getElementById("muvalue");
mval.innerHTML=mufd;