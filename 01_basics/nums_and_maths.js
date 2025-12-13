const score = 400
// console.log(score);
const balance  = new Number(400);
// console.log(balance);  [Number: 400] // explicitly it will mention its type that it is of number type

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 400.00


const othernUm = 1123.33454
// console.log(othernUm.toPrecision(4)); //1123 // if 5 => 1123.3

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()) // insert commas by default acc to the international number system
// console.log(hundreds.toLocaleString('en-IN')) // indian system




//--------------------------------MATHS----------------------------//
// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.6)); //5
// console.log(Math.floor(4.6)); //4
// console.log(Math.min(4,6,4,5,6,8)); //4
// console.log(Math.max(4,6,7,23,6)); //23


console.log(Math.random()); // 0-1 value

console.log((Math.random() *10) +1); // min value will be 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1))+min);




