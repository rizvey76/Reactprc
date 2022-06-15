const person={
    fname:"Atif",
    lname:"Aslam",
}

person.fullName=function (){
  return this.fname+" "+this.lname;
}
console.log(person.fullName());