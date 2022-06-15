const person={
    fname:"Mehak",
    lname:"Ali",
    city:"Lahore",
};

(function(){
    for(let property in person){
        console.log(person[property]);
    }
})();