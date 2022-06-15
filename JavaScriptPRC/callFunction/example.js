const person={
    fullName:function(){
        return `This is ${this.fName} and age ${this.age}`;
    }
}

const person1={
    fName:"Atif",
    age:35,
}

const person2={
    fName:"Umran",
    age:30,
}

console.log(person.fullName.call(person2));