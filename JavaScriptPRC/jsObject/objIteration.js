
let property="";
const myObj={
    name:"Rizvey",
    age:28,
    cricketBats:[
        {brand:"CA",
        models:["Dragon","Morge",1800]},
        {brand:"Ihsan",
        models:["Rage","X1","x3"]},
        {brand:"MIDS",
        models:["x Power"]}
    ]
}

for(let i in myObj.cricketBats){
    for(let j in myObj.cricketBats[i].models){
        property+=myObj.cricketBats[i].models[j]+"\n"; 
    }
 
}



console.log(property);
