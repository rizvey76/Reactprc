///self property return the current window

self.addEventListener('message',function(event){
     console.log(event);
     if(event.data ==='Do some Work'){
          console.log('worker is about to do some work');
          var count=0;
          for(let i=0;i<10000000;i++){
             count+=i;
          }
          this.self.postMessage({message:count});
     }
});