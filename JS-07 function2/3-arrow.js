// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

// //* ÖRNEK :  Silindir Hacmi
// //************************** pi * r** * h*/

// const r = +prompt("r:");
// const h = +prompt("h:");

// const volume = (a, b) => Math.PI * a * a * b;

// console.log(`${r}, ${h} = Volume : ${volume(r, h).toFixed(4)}`);

// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.
// console.log(`${r}, ${h} = Volume : ${volume(r, h).toPrecision(4)}`);

// //? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak
// //? gosterimesi icin kullanilabilir. Aldigi parametre ise kesirli
// //? kisimlarinin basamak sayini gosterir.
// console.log(`${r}, ${h} = Volume : ${volume(r, h).toExponential(4)}`);

// //! alternative way

// const volumeLong = (a, b) => {
//   const result = Math.PI * a * a * b;
//   console.log(result);
//   return result;
// };
// console.log(`${r}, ${h} = Volume : ${volumeLong(r, h).toExponential(4)}`);

// // //* ORNEK: Yas hesapla
// // //************************************************/
// //! ERROR: Once tanimla sonra kullan
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// // console.log("AGE:", calculateAge(1935))
// const calculateAge = (year) => new Date().getFullYear() - year;
// console.log("AGE:", calculateAge(1990));

//?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo = (n) => {
  let fib1 = 1,
    fib2 = 1,
    sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }
  return fib2; //! return 1 if does not execute for loop, for example n = 1 || 2
};

const n = Number(prompt("Please enter n"));

if (n <= 0) {
  console.log("n should be bigger than 0");
} else {
  console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
}

// let n1 = 1;
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
