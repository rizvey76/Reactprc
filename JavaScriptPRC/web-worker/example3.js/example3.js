self.addEventListener('message',(ev)=>{
    console.log('web worker started with data:'+ev.data); 

    let data=ev.data;

    switch(data){
        case 'Get Started':
            self.postMessage('Web worker started');
            break;
        case 'Data':
            getText("https://jsonplaceholder.typicode.com/todos/1");
            async function getText(file){
              let myObject=await fetch(file);
              let myTxt=await myObject.text();
              self.postMessage(myTxt);
            }
            break;
        default:
            self.postMessage('closing web worker');   
            self.close(); 
    }
});