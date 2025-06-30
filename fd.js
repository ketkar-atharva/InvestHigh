let input=document.getElementById("inputfd");
let list=document.getElementById("acclist");
let inamount=document.getElementById("inputam");
let interest=document.getElementById("inputin");
let year=document.getElementById("inputyear");
let listam=document.getElementById("amlist");
let listin=document.getElementById("inlist");
let listval=document.getElementById("valuelist");
let listyear=document.getElementById("yearlist");
let total=document.getElementById("tvalue");
let array=[];
let int=[];
let a=1;
let y=1;
let i=1;
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

function addam(){
   if(inamount.value==""){
      alert("Please enter amount");
   }else if(a<=10){
      let li=document.createElement("li");
      li.innerHTML=inamount.value;
      listam.appendChild(li);
      array[a]=inamount.value;
      inamount.value="";
      a++;

   }else{
      alert("Sorry only 10 amounts can abe added");
   }
}
function addin(){
   if(interest.value==""){
      alert("Please enter Interest rate");
   }else if(i<=10){
      let li=document.createElement("li");
      li.innerHTML=interest.value;
      int[i]=interest.value;
      listin.appendChild(li);
      
      interest.value="";
      i++;

   }else{
      alert("Sorry only 10 values can be added");
   }
}
function addyear(){
   if(year.value==""){
         alert("Please enter Period ");
   }else if(y<=10){
       let li=document.createElement("li");
      li.innerHTML=year.value;
      listyear.appendChild(li);
       let l=document.createElement("li");
      l.innerHTML= array[y]*(1+(Number(int[y])/100))^year.value;
      listval.appendChild(l);
      year.value="";
      y++;

   }
}

let sum=0;
function distotal(){
   if(sum!=0){
      sum=0;
   }
   for(let i=1;i<array.length;i++){
      sum+=Number(array[i]);
   }
   total.innerHTML="";
   total.textContent=sum;
}

