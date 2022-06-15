function Person(name,age){
   let childPerson=Object.create(Person.prototype);
   childPerson.name=name;
   childPerson.age=age;
   return childPerson;
}

Person.prototype={
    run(){
        console.log("He is running to reach the destination");
    }
};


const personOne=Person("Mr.v",30);
personOne.run();
