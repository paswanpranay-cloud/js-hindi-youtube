/*

console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

*/

console.log("2" > 1); //  true
console.log("02" > 1); //true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true here null gets converted to 0 

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); //false

// comparing two different datatypes would give unexpected result

/// === (strict) check-> values+datatypes

console.log("2" == 2);
console.log("2" === 2);