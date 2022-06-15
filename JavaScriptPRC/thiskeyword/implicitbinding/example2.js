var printPlayerFunction=function(obj){
    obj.printPlayerName=function(){
        console.log(this.name);
    }
}


var Imran={
    name:"Imran Khan",
    age:65,
}

var Umar={
    name:"Umar Gul",
    age:45,
}

printPlayerFunction(Umar);
Umar.printPlayerName();