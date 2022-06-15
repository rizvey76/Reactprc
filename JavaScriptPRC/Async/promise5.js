const promise1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`Promise1 resolved`);
    },5000);
});

const promise2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`Promise2 resolved`);
    },2000);
});

Promise.all([promise1,promise2]).then((res)=>{
    console.log(res);
});