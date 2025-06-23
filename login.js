const f=document.getElementById("inp");




const form=document.getElementById("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    
   localStorage.setItem('f-name',f.value);
    window.location.href="indexhome.html";

});