var person=function(name,age){
     return{
         name:name,
         age:age,
         printName:function(){
             console.log(this.name);
         }
     }
}


var Imran=person("Imran Khan",65);

Imran.printName();