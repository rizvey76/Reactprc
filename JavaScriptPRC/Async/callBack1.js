
function display(something){
    console.log(something);
}


function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    if(myCallback){
        myCallback(sum);
    }
   
  
  }
  
  myCalculator(5, 5,display);