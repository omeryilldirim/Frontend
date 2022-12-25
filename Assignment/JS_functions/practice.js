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

const checkLeapYear = function (year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    const result = `${year} is a leap year`;
    return result;
  } else {
    const result = `${year} is a not leap year`;
    return result;
  }
};

const year = prompt("Enter a year:");

console.log(checkLeapYear(year));
