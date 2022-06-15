const statu = true;
console.log('Task1');

const promise=new Promise(
    function(resolve,reject){
        setTimeout(function(){
            if(statu){
                resolve('Task2');
             }else{
               reject('faild');  
             }
        },2000);
        
    }
);

promise.then(function(value){
    console.log(value);
}).catch(
    function(err){
        console.log(err);
    }
);


console.log('Task3');