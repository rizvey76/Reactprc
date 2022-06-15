
///Apply function can take array as parameter/////
const person={
    fullName:function(city,country){
        return this.fname+""+this.lname+";"+city+","+country;
    }
}

const person1={
    fname:"Atif",
    lname:"Aslam",
}

console.log(person.fullName.apply(person1,["Lahore","Pakistan"]));