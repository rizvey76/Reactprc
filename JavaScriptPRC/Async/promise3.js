let hasMeeting=false;
const meeting=new Promise((resolve,reject)=>{
     if(!hasMeeting){
          const meetingDetails={
              name:"Technical Meeting",
              location:"Google Meet",
              time:"10:00 PM",
          };
          resolve(meetingDetails);
     }else{
         reject(new Error('Meeting Already Scheduled'));
     }
});


const addToCalender=(meetingDetails)=>{
    const calender =`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
}

meeting.then(addToCalender).then((res)=>{ 
    console.log(res);
}
    ).catch((err)=>{
        console.log(err);
 });