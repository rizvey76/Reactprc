const person={
    fname:"Atif",
    lname:"Aslam",
    age:36,
    // get fullName(){
    //     return this.fname+" "+this.lname;
    // }
};

// console.log(person.fullName);

Object.defineProperty(person,"fullName",{
    get:function(){
        return this.fname+" "+this.lname;
    }
});

console.log(person.fullName);
