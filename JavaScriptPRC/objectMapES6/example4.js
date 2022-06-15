const fruits=new Map([["apples",500],["bananas",300],["oranges",200]]);

let txt="";

fruits.forEach((key,value)=>{
     txt+=key+" : "+value+"\n";
});

console.log(txt);

console.log(typeof(fruits));
