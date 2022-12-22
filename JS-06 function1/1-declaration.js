// * =====================================
// *           FUNCTIONS
// * ======================================

console.log("** FUNC DECLARATION **");

//? ORNEK1:
//? ****************************************/

// function printHello() {
//   console.log("Hello, world!");
// }
// printHello();

//? ORNEK2:
//? ****************************************/

// function greet(firstName, lastName = "") {
//   console.log(`Hello ${firstName} ${lastName}`);
// }
// const name = prompt("Enter your name");
// const surname = prompt("Enter your surname");

// greet(name, surname);
// //! JS de fonksiyonlar parametrelere değişkenleri değil değerlerini aktarır. PASS BY VALUE

// greet("ahmet");
// //!Default parameter assignment ! lastName = "" olarak default değer atanabilir.

//? ORNEK3:
//? ****************************************/

// function calculate(name, yearofbirth) {
//   const age = new Date().getFullYear() - yearofbirth;
//   return `${name} is ${age} years old.`;
// }

// calculate("ömer", 1992);
// console.log(calculate("ömer", 1992));

//? ORNEK4:
//? ****************************************/

function oddOrEven(num) {
  return num % 2 ? "ODD" : "EVEN";
}

const number = +prompt("Please enter a number to check odd or even");
const result = oddOrEven(number);
console.log(`${number} is ${result}`);
