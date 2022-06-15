
//////////JSON to Obj///////
const jsonData='{"fname":"Mehak" , "lname":"Ali"}';
const objData=JSON.parse(jsonData);

console.log(objData.fname+" "+objData.lname);

//////////Obj to JSON/////////////////

const obj={fname:"Mehak",lname:"Ali"};
const jSon=JSON.stringify(obj);
console.log(jSon);

//////////JSON with array///////////

let txt='{"employees":['+
    '{"fname":"Jhon","lname":"Doe"},'+
    '{"fname":"Anna","lname":"Smith"},'+
   '{"fname":"Peter","lname":"Jones"}]}';

   const jsonToObj=JSON.parse(txt);

   console.log(jsonToObj);
   const newObj=jsonToObj;

//    console.log(newObj.employees);

   (function(){
    for(let obj of newObj.employees){
        console.log(obj.fname+" "+obj.lname);
    }
   })();