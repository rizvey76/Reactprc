const fruits=["Apples","Bananas","Oranges"];

let element=fruits.find((element)=>{  //it returns fisrt element that satisfied the condition
    if(element==="Bananas"){
        return element;
    }
});

console.log(element);