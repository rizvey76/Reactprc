const player={  //parent obj
      name:"Mashrafi",
      type:"Bowler",
}

const captain=Object.create(player); //child Obj

console.log(captain.name);