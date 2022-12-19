// //? sum up the numbers from 1 to n /

// const n = Number(prompt("Enter a number"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Sum is :", sum);

// //? produce 10 random numbers between 0-100 /

// for (i = 1; i < 11; i++) {
//   const randomNum = Math.trunc(Math.random() * 100);
//   console.log(`${i}.number is ${randomNum}`);
// }

// //? check if a number is prime or not /

// const number = Number(prompt("Enter a number bigger than 1"));

// let isPrime = true;

// if (number > 1) {
//   if (number === 2) {
//     console.log(`${number} is a prime number.`);
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         console.log(`${number} is not a prime number.`);
//         break;
//       }
//     }
//   }
// } else {
//   console.log("please enter a number bigger than 1");
// }

// if (isPrime === true) {
//   console.log(`${number} is a prime number.`);
// }

// //? print hello world 10times

// let i = 0;

// while (i < 10) {
//   console.log("Hello world!");
//   i++;
// }

// //? ask the user to input a grade and if the grade is not between 0-100 ask the user to input again and print how is the grade result

// let grade = Number(prompt("Enter your grade"));

// while (grade < 0 || grade > 100) {
//   grade = Number(prompt("Enter your grade"));
// }

// if (grade > 80) {
//   console.log("Your grade is very good");
// } else if (grade > 50) {
//   console.log("your grade is good");
// } else if (grade > 30) {
//   console.log("your grade is low");
// } else {
//   console.log("you f.cked up!");
// }

// //? print hello world 10times with do...while

// let i = 0;

// do {
//   console.log("hello world!");
//   i++;
// } while (i < 10);

// //? d0...while : ask the user to input a grade and if the grade is not between 0-100 ask the user to input again and print how is the grade result

// do {
//   var grade = Number(prompt("Enter your grade"));
// } while (grade < 0 || grade > 100);

// if (grade > 80) {
//   console.log("Your grade is very good");
// } else if (grade > 50) {
//   console.log("your grade is good");
// } else if (grade > 30) {
//   console.log("your grade is low");
// } else {
//   console.log("you f.cked up!");
// }

//? create a do...while loop to ask the user to input grade until user input q or Q. when the user input q or Q stop the loop and sum up all the number inputed so far.

var sum = 0;
var number = 0;

do {
  sum += +number;
  console.log(sum);
  number = Number(prompt("enter a number to sum up or press q/Q to quit"));
} while (String(number) !== "q" || String(number) !== "Q");

console.log(`Sum is: ${sum}`);

// # ODEV1: Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.

// # ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

// # ODEV3 (ZOR): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.

// ## ORNEK:

// ### 43567 => Basamak sayisi: 5

// ### 123 => Basamak sayisi: 3
