const marvel_heros = ["thor","iron-man","spiderman"]
const dc_heros = ["supermain","batman",'flash']


marvel_heros.push(dc_heros)

console.log(marvel_heros); // array ke ander array aayega 
console.log(marvel_heros[3][1]);

const allHeroes = marvel_heros.concat(dc_heros);
console.log(allHeroes);

//spread -> ...

const all_new_heros =[...marvel_heros,...dc_heros]

console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

//flat -> ret new array all sub-array elements concatenated into it

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Pranay")); //isArray for checking -> false
console.log(Array.from("Pranay")); // from -> converts into array
console.log(Array.from({name: "Pranay"})); // Return empty array->we have to tell whether key , values ka array banna hai


// Of -> return new array from set of elemnts

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


