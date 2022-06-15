let paymentSuccess=true;
let marks=60;

function enroll(callback){
console.log("course enrollment on progress...");
setTimeout(function(){
    if(paymentSuccess){
        callback();
    }else{
        console.log("payment method is not completed...");  
    }
},2000);

}


function progress(callback){
    console.log("course on progress...");

    setTimeout(function(){
        if(marks>=80){
           callback();
        }else{
            console.log('you does not have enough marks to gain certificate');
        }
    },3000);
}

function getCertificate(){
    console.log("your certicate on progress...");
    setTimeout(function(){
        console.log("congratulations!, your certification has been completed");  
    },1000);
    
}


enroll(function(){
   progress(getCertificate); 
});