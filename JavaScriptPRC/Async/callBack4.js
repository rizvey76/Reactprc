const takeOrder=(customer,callback)=>{
   console.log(`Take Order For ${customer}`);
   callback(customer);
};

const processOrder=(customer,callback)=>{
   console.log(`Processing Order For ${customer}`);
   setTimeout(()=>{
       console.log('cooking completed');
       console.log(`Order Processed for ${customer}`);
       callback(customer);
   },3000);
  
};

const completedOrder=(customer)=>{
   console.log(`completed order for ${customer}`);
};

takeOrder('Customer1',(customer)=>{
         processOrder(customer,(customer)=>{
              completedOrder(customer);
         });
});