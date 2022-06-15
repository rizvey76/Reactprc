function Person(name,age){
    // let childPerson=Object.create(Person.prototype);
    this.name=name;
    this.age=age;
    // return this;
 }
 
 Person.prototype={
    //  run:function(){
    //      console.log("He is running to reach the destination");
    //  }

     run(){
        console.log("He is running to reach the destination");
    }
 };
 
 console.log(typeof(Person.prototype));
 const personOne=new Person("Mr.v",30);
 personOne.run();
 