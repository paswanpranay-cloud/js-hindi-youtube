// objects -> 1. constructors->singleton

// objects ->literals
// object -> key and value pair

// For accesssing objects mostly . is  used but [] can also be used
const mySym = Symbol("key1")

const JsUser = {
    name : "Pranay",
    "full name" : "Pranay Paswan", // cannot  be accessed by () but [] is possible
    [mySym] : "mykey1",
    Age : 21,
    location : "Noida",
    email : "Paswanpranay@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(JsUser["email"]); // better way
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]); // string to convert -> [mySym] at object declaration

JsUser.email = "Pranay@1.com"
console.log(JsUser.email);
// Object.freeze(JsUser);  // freeze -> objects get freezed and do not changes
JsUser.email = "Kislay.com"
console.log(JsUser);

//Functions

JsUser.greeting = function() {
    console.log("Hello Js User");
}

console.log(JsUser.greeting); // function anonoymous -> function referece aya hai-> 
console.log(JsUser.greeting()); // Hello Js user


JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`) // this
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// CONSTRUTOR BELOW 
//Object.create 
