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

// let perNum = prompt("Enter a positive number");

// while (perNum <= 0) {
//   perNum = prompt("Enter a positive number");
// }

// function persistence(num) {
//   let step = 0;
//   if (num.length > 1) {
//     do {
//       step += 1;
//       let result = 1;
//       for (i = 0; i < num.length; i++) {
//         result *= num[i];
//       }
//       num = String(result);
//     } while (num.length > 1);
//   }
//   return step;
// }

// console.log(persistence(perNum));

//! *******************  JS CLASS EXAMPLES  ********************** 

//? 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
//? console.log(calFahrenheit(30)) // output: 86

// const convert = (deg) => {
//   const Fahrenheit = (deg * 9/5) + 32
//   return Fahrenheit;
// }
// console.log(convert(30));
// console.log(convert(23));


//? 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
//? console.log(reverseString('hello world')) // output: dlrow olleh

// const reverseString = function(str){
//   let  result = ""
//   for (i=(str.length)-1 ; i>=0 ; i-- ){
//     result += str[i]
//   }
//   console.log(result);
// }

// reverseString("hello world")
// reverseString("how are you")


//? 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?(Büyük , küçük harf duyarlılığı olmamalıdır.)
//? const string = 'selles'
//? console.log(isPalindrome(string)) // output: true

// const isPalindrome = function(str){
//   let  result = ""
//   for (i=(str.length)-1 ; i>=0 ; i-- ){
//     result += str[i]
//   }
//   return result == str
// }

// console.log(isPalindrome("selles"));
// console.log(isPalindrome("hello")); 

//? 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
//? console.log(findVowels('hello world')) // output: eoo

// function findVowels(str){
//   const vowels = ["a","e","ı","i","o","ö","u","ü"]
//   let output = ""
//   for (i=0; i<str.length; i++){
//     if (vowels.includes(str[i])){
//       output += str[i]
//     }
//   }
//   console.log(output);
// }

// findVowels("hello world")
// findVowels("my name is john")

//? 5- Belirli bir sayının faktöriyelini bulan fonksiyonu yazınız?

// function factorial(number) {
//   if (number === 1) {
//     return 1
//   }
//   return number * factorial(number - 1)
// }
// console.log(factorial(5))

//? 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
//? console.log(sumOfDivisors(12)) // output: 28

// function sumOfDivisors(num) {
//   let sum = 0
//   for(i=1; i<=num; i++){
//     if (num % i === 0){
//       sum += i
//     }
//   }
//   console.log(sum);
// }

// sumOfDivisors(3)
// sumOfDivisors(12)

//? 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
//? console.log(isPrime(7)) // output: true

// const isPrime = number => {
//   if (number == 1){
//     return false
//   } else if (number == 2){
//     return true
//   } else if(number>1){
//     for(i=2; i<number; i++){
//       if(number % i === 0){
//         return false
//       }
//     }
//     return true
//   } else {
//     return "please enter a number bigger than 0"
//   }
// }

// console.log(isPrime(2));
// console.log(isPrime(1));
// console.log(isPrime(-50));
// console.log(isPrime(97));