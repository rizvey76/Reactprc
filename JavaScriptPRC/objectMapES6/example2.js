const cricketBat1={
    name:"Ihsan",
    origin:"Pakistan",
}

const cricketBat2={
    name:"GM",
    origin:"England",
}

const cricketBat3={
    name:"SS",
    origin:"India",
}

const cricketBat=new Map();
cricketBat.set(cricketBat1,200);
cricketBat.set(cricketBat2,150);
cricketBat.set(cricketBat3,100);

console.log(cricketBat.get(cricketBat1));
console.log((function(){
    for(let obj of cricketBat){
         console.log(obj);
    }
})());