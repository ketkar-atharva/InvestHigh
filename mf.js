let input=document.getElementById("inputfund");
let list=document.getElementById("fundlist");
let val=document.getElementById("inputvalue");
let listval=document.getElementById("valuelist");
let nav=document.getElementById("inputnav");
let listnav=document.getElementById("navlist");
let listt1=document.getElementById("tlist");
let total=document.getElementById("tvalue");
let arrayvalue=[];


let a=1;
let v=1;
let n=1;
function addfund(){
    if(input.value==""){
        alert("Please enter fund name");
    }else if(n<=10){
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
       
         input.value="";
         n++;
            
    }else{
        alert("sorry only 10 funds can be added");
    }
   
}

function addvalue(){
    if(val.value==""){
        alert("Please enter fund value");
    }else if(v<=10){
        let li=document.createElement("li");
        li.innerHTML=val.value;
        listval.appendChild(li);
        arrayvalue[v]=val.value;
        val.value="";
         v++;
            
    }else{
        alert("sorry only 10 funds can be added");
    }
   
}
function addnav(){
    if(nav.value==""){
        alert("Please enter NAV");
    }else if(a<=10){
        let li=document.createElement("li");
        li.innerHTML=nav.value;
        listnav.appendChild(li);
        let l=document.createElement("li");
        l.innerHTML= (arrayvalue[a]/ nav.value).toFixed(2);
        listt1.appendChild(l);
        nav.value="";
        a++;
        
    }else{
        alert("Sorry only 10 NAV can be added");
    }
}
function displaytotal(){
    let sum=0;
    for(let i=1;i<arrayvalue.length;i++){
      
        sum+=Number(arrayvalue[i]);
    
    }
    total.innerHTML="";
    total.textContent=sum;
}
