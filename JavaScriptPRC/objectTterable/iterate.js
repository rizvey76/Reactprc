const nums=[1,2,3,4];
const numsItem=nums[Symbol.iterator]();

console.log(numsItem.next().value);
console.log(numsItem.next());
console.log(numsItem.next());
console.log(numsItem.next());