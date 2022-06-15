const fruits=new Set(["Apples","Bananas","Oranges"]);

let txt="";
fruits.forEach((fruit)=>{
    txt+=fruit+"\n";
});

console.log(typeof(fruits));
console.log(txt);