//? Taban ve yükseklik değerleriyle üçgenin alanını globale döndüren fonksiyon

// const base = 25, height = 10

// const calculateArea = function(a,b){
//     const area = a*b / 2
//     return area
// }

// console.log(calculateArea(base, height));

//? kare, küp ve üs almak için 3 farklı fonksyon tanımla, parametreleri globalden alıp sonucu lobale döndürsün.

// const number = Number(prompt("Enter a number"));

// const getSquare = function (n) {
//   return n ** 2;
// };
// const getCube = function (n) {
//   return n ** 3;
// };
// const getExponent = function (n) {
//   const exponent = Number(prompt("Enter the exponent"));
//   return n ** exponent;
// };

// console.log(getSquare(5));
// console.log(getCube(5));
// console.log(getExponent(5));

//? function to check leap year

// const checkLeapYear = function (year) {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     const result = `${year} is a leap year`;
//     return result;
//   } else {
//     const result = `${year} is a not leap year`;
//     return result;
//   }
// };

// const year = prompt("Enter a year:");

// console.log(checkLeapYear(year));

//? Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

let perNum = prompt("Enter a positive number");

while (perNum <= 0) {
  perNum = prompt("Enter a positive number");
}

function persistence(num) {
  let step = 0;
  if (num.length > 1) {
    do {
      step += 1;
      let result = 1;
      for (i = 0; i < num.length; i++) {
        result *= num[i];
      }
      num = String(result);
    } while (num.length > 1);
  }
  return step;
}

console.log(persistence(perNum));
