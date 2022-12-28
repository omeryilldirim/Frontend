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
console.log(str1.substring(-8, -4));
console.log(str1.substring(2, -4));
console.log(str1.substring(0, 2));
//! Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.
//! Any argument value that is NaN is treated as if it were 0.

console.log(str1.includes("w"));
console.log(str1.indexOf("W"));
console.log(str1.indexOf("w", 3));

const email = "omer@gmail.com"
console.log(email.indexOf(".com", email.indexOf('@')));

const str5 = "You do not KNOW what you do not know until you know."
console.log(str5.search("know"));
console.log(str5.search(/know/));
console.log(str5.search(/know/i));

const str6 = str5.replace("know", "learn")
const str7 = str5.replace(/know/i, "learn")
const str8 = str5.replace(/know/ig, "learn")
const str9 = str5.replaceAll("know", "learn")
console.log(str6);
console.log(str7);
console.log(str8);
console.log(str9);

const str10 = "Welcome to : Full Stack Clarusway"
console.log(str10.split());
console.log(str10.split(""));
console.log(str10.split(" "));
console.log(str10.split(","));
console.log(str10.split(": "));
console.log(str10.split("", 10));
