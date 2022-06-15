var person=function(name,age){
    return{
        name:name,
        age:age,
        printName:function(){
            console.log(this.name);
        } ,
        father:{
            name:'Mr. MMM',
            printFatherName:function(){
                console.log(this.name);
            }
        }
    }
}

var Imran=person("Imran khan",65);
Imran.printName();
Imran.father.printFatherName();