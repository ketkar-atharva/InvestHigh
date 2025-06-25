let input=document.getElementById("inputfund");
let list=document.getElementById("fundlist");
let val=document.getElementById("inputvalue");
let listval=document.getElementById("valuelist");
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
        val.value="";
         v++;
            
    }else{
        alert("sorry only 10 funds can be added");
    }
   
}