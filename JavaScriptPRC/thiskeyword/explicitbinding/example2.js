var printName=function(v1,v2,v3){
    console.log(`${this.name}  is ${v1} ${v2} ${v3}`);
 }
 
 var Imran={
     name:"Imran Khan",
     age:65,
 }
 
 var v1="Hand some";
 var v2="All rounder";
 var v3="person";
 
 var v=[v1,v2,v3];
 printName.apply(Imran,v);