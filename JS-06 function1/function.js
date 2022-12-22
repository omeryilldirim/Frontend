// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

function printHello() {
  console.log("Hello, world!");
}
printHello();

//* ORNEK2:
//*****************************************/

function greet(firstName, lastName = "") {
  console.log(`Hello ${firstName} ${lastName}`);
}
const name = prompt("Enter your name");
const surname = prompt("Enter your surname");

greet(name, surname);
//! JS de fonksiyonlar parametrelere değişkenleri değil değerlerini aktarır. PASS BY VALUE

greet("ahmet");
//!Default parameter assignment ! lastName = "" olarak default değer atanabilir.
