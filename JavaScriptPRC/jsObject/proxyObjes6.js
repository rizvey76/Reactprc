//proxy object give us utility to be validated wich is injected to our object
//Reflect is a build in object that provides methods for interceptable javaScript operations

const person={
    fname:"Atif",
    lname:"Aslam",
    age:36,

}


const proxyObj=new Proxy(person,{
    get:function(target,prop,receiver){
        console.log(prop+"has been accessed!");
      
            
            // return target[prop];
            return Reflect.get(target,prop,receiver);
       
      
    },

    set:function(target,prop,value){
       if(!(prop in target)){
           throw new ReferenceError("Unknown property"+prop);
        }

       if(prop ==='age' && value > 100 ){
           
            throw new Error('Age is not valid!');
       }else{
           target[prop]=value;
        //    return true;
        return Reflect.set(target,prop,value);
       }
    }
});

try{
    proxyObj.age=250;
    
}catch(e){
    console.log(e.message);
}

// proxyObj.home="Pakistan";
console.log(proxyObj);