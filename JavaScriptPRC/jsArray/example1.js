var arr=[2,3,4,5];

let newArr1=arr.filter((val)=>{  //filter
    return val>3;
});

console.log(newArr1);

let newArr2=arr.reduce((previousValue,currentValue)=>{  //reduce
    return previousValue+currentValue;
});

console.log(newArr2);

console.log(arr.indexOf(2)); //indexOf



