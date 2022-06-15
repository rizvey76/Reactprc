let paymentSuccess=true;
let marks=81;

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

async function course(){
    try{

    await enroll();
    await progress();
    const val=await getCertificate();
    console.log(val);

    }catch(err){
        console.log(err);
    }
    
}

course();
