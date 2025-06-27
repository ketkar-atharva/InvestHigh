let input=document.getElementById("inputfd");
let list=document.getElementById("acclist");
let n=1;
function addacc(){
   if(input.value==""){
    alert("Please enter Acccount No.");
   }else if(n<=10){
    let li=document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);
    input.value="";
    n++;
   }else{
    alert("Sorry only 10 Account can be added");
   }
}