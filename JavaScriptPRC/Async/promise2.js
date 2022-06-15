let paymentSuccess=true;
let marks=80;

function enroll(){
    console.log("course enrollment on progress...");
    const promise=new Promise(
        function(resolve,reject){
            setTimeout(
                function(){
                    if(paymentSuccess){
                        resolve();
                    }else{
                        reject('payment method is not completed...');  
                    }
                },2000);
        }
    );

    return promise;
}


function progress(){
    console.log("course on progress...");
    const promise=new Promise(
        function(resolve,reject){

            setTimeout(function(){
                if(marks>=80){
                   resolve();
                }else{
                    reject('you does not have enough marks to gain certificate');
                }
            },3000);
        }
    );

    return promise;
}


function getCertificate(){
    console.log("your certicate on progress...");
    const promise=new Promise(function(resolve){
        setTimeout(function(){
            resolve("congratulations!, your certification has been completed");  
        },1000);
    });

    return promise;
}

enroll().then(progress).then(getCertificate).then(
    function(value){
        console.log(value);
    }
).catch(
    function(err){
        console.log(err);
    }
);
