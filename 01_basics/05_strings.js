const name = "Pranay"
const repoCount = 331

console.log(name + repoCount  + "Value"); /// Not used in modern days

// ************Important Backticks -> String Interpolation****************(``) 1 ke left mai/

console.log(`Hello my name is ${name} ans my repoCount is ${repoCount}`);

// String declaration by (new) and object

const gameName = new String("Pranay-hc");
console.log(gameName[0]);   //P
console.log(gameName.__proto__); // {}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4);  ///4th value exclsisuve
console.log(newString);

const anotherString = gameName.slice(-8,4); // negative allowed
console.log(anotherString);

const newStringOne = "   Pranay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pranay.comn/pranay%20paswan"

console.log(url.replace('%20','-'));

// can ask questions 

console.log(url.includes('pranay'));

// convert string to array or divide on basiss of (-) *split

console.log(gameName.split('-'));
/*
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Pranayhc"
﻿
*/