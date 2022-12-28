// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

let str1 = 'Clarusway'
let str2 = `Full Stack`
let str3 = new String("This is a string")

console.log(str1);
console.log(str3);
console.log(str1.concat(" ", str2));
console.log(str1[-1]);  //! returns undefined

let a = 5
let b = a
console.log(a, b);
console.log({a}, {b});
a = 10
console.log({a}, {b});

console.log("Hello \bworld");
console.log(`Hello 

world`);

console.log(str1.slice(-5, 8));
