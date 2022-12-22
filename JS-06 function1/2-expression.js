// * =====================================
// *           FUNCTIONS
// * ======================================

console.log("** FUNC EXPRESSION **");
//* Can not call this function before initialized

//? ORNEK1:
//? ****************************************/

// const printHello = function () {
//   console.log("Hello, world!");
// };
// printHello();

//? ORNEK2:
//? ****************************************/

// let oddOrEven = function (num) {
//   return num % 2 ? "ODD" : "EVEN";
// };

// const number = +prompt("Please enter a number to check odd or even");
// const result = oddOrEven(number);
// console.log(`${number} is ${result}`);

//? ORNEK3:
//? ****************************************/

// const findBiggest = function (num1, num2, num3) {
//   let biggest = num1;
//   if (num2 >= biggest) {
//     biggest = num2;
//   }

//   if (num3 >= biggest) {
//     biggest = num3;
//   }
//   return biggest;
// };

// console.log(`The biggest is ${findBiggest(22352532, 235252, 32352)}`);

const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};

const compute = function (n1, n2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    default:
      break;
  }
  return result;
};

console.log(compute(4, 3, "/"));
console.log(compute(2, 4, "*"));
console.log(compute(3, 1, "+"));
