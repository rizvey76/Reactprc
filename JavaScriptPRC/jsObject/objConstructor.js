function Person(fname,lname){
   this.fname=fname;
   this.lname=lname;
   
}

Person.nationality="Pakistan";
const obj1=new Person("Atif","Aslam");

console.log(obj1.fname+" " +"country"+Person.nationality);