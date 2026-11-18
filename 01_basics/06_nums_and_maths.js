const score = 400  // output 400
console.log(score);

const balance = new Number(100.78987989889)  // output [Number : 100]
console.log(balance);

console.log(balance.toString()); 
console.log(typeof balance) //object dega as output kyuki hamne new keyword se bnaya hai
console.log(typeof balance.toString())  // string dega as output
console.log(balance.toFixed(2));  // 100.79 dega as output 2 indicate the level of precison

const otherNUmber = 23.8966
const secondNumber = 123.8966
console.log(otherNUmber.toPrecision(3));  // 23.9
console.log(secondNumber.toPrecision(3)); // 124 ->3 VALUE KE BAAD ROUNDOFF

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // comma acc to US standards
console.log(hundreds.toLocaleString('en-IN')); // comma acc to indian std


////********MATHS ***********************/////////////


// Maths lubraray comes in javascript by default

console.log(Math);  // Object
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));  // top value
console.log(Math.floor(4.9));  //floor value
console.log(Math.min(4,8,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());  // Always in between  0 to 1
console.log(Math.random()*10); // but can be 0
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
