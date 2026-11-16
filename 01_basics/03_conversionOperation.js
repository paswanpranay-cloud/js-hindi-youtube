let score = "Pranay"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber =  Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)  // "33abc" -> would give NAN Not a Number
                            // null ke case mai 0 dega
                            //undefined mai Nan aayega
                            // true ke case mai 1 , false ke case mai 0
                            // string ke case mai Nan matlab conversion operation nhi hoga if score = "Pranay" theere 
                            // taht is console.log

//  "33" -> 33
// "33abc" -> Nan
// true -> 1 , false -> 0

let isLoggedIn = "Pranay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  // IF isLoggedIn = 1 -> output true , 0 false
                                // empty sytring would give false
                                // if "Pranay" tehn true

// 1 -> true
// 0 -> false
// "" -> false
//"Pranay" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // converted to string 

                                