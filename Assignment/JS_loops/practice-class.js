//? Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?

// for (i = 1000; i <= 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i);
//   }
// }

//? Soru-2  Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız ?

// let sum = 0;

// for (i = 1; i <= 5; i++) {
//   const number = Number(prompt(`Enter ${i}. number : `));
//   sum += number;
// }
// const avg = sum / 5;
// console.log(avg);

//? Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve konsola yazan kodu yazınız ?

// let sum = 0;
// let number = 0;
// do {
//   sum += number;
// //   console.log(sum);
//   number = Number(prompt("Enter a number"));
// } while (number >= 0);

// console.log(`Final sum is ${sum}`);

//? Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz',
//5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?

// for (i = 1; i < 101; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//? Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

// let digit = 0;
// let number = +prompt("Enter a number");

// while (true) {
//   number = Math.trunc(number / 10);
//   digit += 1;
//   if (number == 0) {
//     break;
//   }
// }
// console.log(digit);

//? Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13

// const n = Number(
//   prompt("Please enter a number for the length of fibonacci array")
// );

// let n1 = 0;
// let n2 = 1;
// let count = 2;
// let n3;
// let result = "";

// if (n == 1) {
//   result += n1;
// } else if (n == 2) {
//   result += n1;
//   result += " " + n2;
// } else if (n > 2) {
//   result += n1;
//   result += " " + n2;
//   for (let i = 2; i < n; i++) {
//     n3 = n1 + n2;
//     result += " " + n3;
//     n1 = n2;
//     n2 = n3;
//     count++;
//   }
// }

// console.log(result);

//? soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let result = "";

// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 5; j++) {
//     result += "* ";
//   }
//   result += "\n";
// }
// console.log(result);

//? soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
// O
// OO
// OOO
// OOOO
// OOOOO
// OOOOOO
// OOOOOOO

// let result = "";

// for (i = 1; i < 8; i++) {
//   result += "0".repeat(i);
//   result += "\n";
// }
// console.log(result);

//? soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?
//    O
//   OOO
//  OOOOO
// OOOOOOO

// let result = "";

// for (j = 3, i = 1; j >= 0; j--, i += 2) {
//   result += " ".repeat(j);
//   result += "0".repeat(i);
//   result += "\n";
// }

//! another method
// let str = "";
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i + j >= 8) {
//       str += "O";
//     } else {
//       str += " ";
//     }
//   }
//   str += "\n";
// }

// console.log(str);
