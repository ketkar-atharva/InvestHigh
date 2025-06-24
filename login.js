const first=document.getElementById("input");
console.log(first.value);
function addname(){
const first=document.getElementById("input").value;
console.log(first);
localStorage('intro',first);
window.location.href="indexhome.html";
}