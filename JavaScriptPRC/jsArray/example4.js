const cars=["toyota","mazda","honda","audi"];
cars.push("fiat");

// console.log(cars);


/////////////////

const numbers=[2,3,4,5,6,7,8,9];
console.log(numbers.every((element,index,array)=>{   //test all elements with implemented condition
    return element>1;
}));

////////////////////
console.log(numbers.some((element,index,array)=>{   //test some elements with implemented condition
    return element>2;
}));

