//Normally one obj can't be consider as other object's key and that's why concept of Map cames up in es6
const obj1={name:"first Obj"};
const obj2={name:"Second Obj"};
let warapObj={};
warapObj[obj1]="Wrap First";
warapObj[obj2]="Wrap Second";

// console.log(warapObj[obj1]);
// console.log(warapObj[obj2]);

const mapObj=new Map();
mapObj.set(obj1,"Wrap First");
mapObj.set(obj2,"Wrap Second");

// console.log(mapObj.get(obj1)+"  "+mapObj.get(obj2));


console.log((function(){
    for(let [key,value] of mapObj){
       console.log( key+":"+value);   
    }
})());