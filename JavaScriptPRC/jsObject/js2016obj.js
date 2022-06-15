const person={
    name:"Atif",
    lname:"Aslam",
    age:36,
}
///it returns array of key-value pairs
console.log(Object.entries(person));


const fruits={
    apples:500,
    bananas:200,
    oranges:750,
}

for(let [fruit,quantities] of Object.entries(fruits)){
    console.log(fruit+":"+quantities+"\n");
}
