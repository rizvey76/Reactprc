let m=document.getElementById("m");
let d=document.getElementById("d");
let p=document.getElementById("p");
let s=document.getElementById("s");

d.addEventListener('click',(ev)=>{  //parent div event will get all of it's child
    console.log("Event fire!");
     ev.stopPropagation();
},);

s.addEventListener('click',(ev)=>{
   
     ev.stopPropagation(); //inorder to stop propagation
},);