const person={
    fname:"Atif",
    lname:"Aslam",
    language:"Panjabi",
}

Object.defineProperty(person,"language",{value:"Urdu"});

console.log(person.language);