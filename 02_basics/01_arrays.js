// array -> resizable , can be mixed of datatypes, cannot be accessed using aribtraray strings
// array -> creates shallow copy

//* shallow copy -> copy whose properties share the same references as those of the source object from whcih the copy was made
//*deep copy -> do not share same refrences
const myArray = [0,1,2,3,4]
const myArray1 = [1,2,3,true,"Pranay"]
console.log(myArray1);
console.log(myArray1[0]);

const myHeroes = ["Pranay",  "Kislay"]

// another way to declare array -> using -> new Array()

const myArray2 = new Array(1,2,3,4)
console.log(myArray2);

//Array methods

myArray.push(5);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(9);  // element ko first pr laakr dega
console.log(myArray);
myArray.shift();
console.log(myArray); // unshift ka opposite

// Question methods

console.log(myArray.includes(9)); // includes
console.log(myArray.indexOf(3));

const newArr = myArray.join();
console.log(myArray); //[0,1,2,3,4] -> type object
console.log(newArr); //0,1,2,3,4 -> type string 

console.log(typeof myArray);
console.log(typeof newArr);


// important -> slice,splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3); // last range 

console.log(myn1);
console.log("B", myArray);// Slice->originnal array do not changes,end index exclusive

const myn2 = myArray.splice(1,3);
console.log("C",myArray);  //Splice->Original array changes,end index delete count
console.log(myn2);