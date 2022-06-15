const obj={
    a:"First Letter of English Alphabets",
    z:"Last Letter of English Alphabets",
};


///Object.entries(obj) make obj iterable

for(let [key,value] of Object.entries(obj)){
    console.log(key+":"+value);
}