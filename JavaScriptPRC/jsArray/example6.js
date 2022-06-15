const points=[40,100,1,5,25,10];
console.log(points.sort((aValue,bValue)=>{
    return aValue-bValue;
}));
///////////random sort///////
console.log(points.sort((aValue,bValue)=>{
    return 0.5-Math.random();
}));

////////////Find highest/////
function myArraymax(arr){
    return Math.max.apply(null,arr);
};

console.log(myArraymax(points));