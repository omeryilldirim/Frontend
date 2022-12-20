// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("*** WHILE ***")

// let count = 1
// while (count <= 10) {
//   console.log("Count:", count)
//   count++
// }

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let grade = Number(prompt("your grade:"))

// while (grade < 0 || grade > 100) {
//   console.log("Grade should be 0-100")
//   grade = Number(prompt("your grade:"))
// }
// for (; grade < 0 || grade > 100; ) {
//   console.log("Grade should be 0-100")
//   grade = Number(prompt("your grade:"))
// }

// console.log(`Your grade: ${grade}`)

// if (grade < 0 || grade > 100) {
//   console.log("Incorrect grade")
// }

//! ODEV3 (COZUM): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimiyle yaziniz.

let counter = 0
let number = Number(prompt("your number:"))

while (number != 0) {
  number = Math.trunc(number / 10)
  console.log(number)
  counter++
}

console.log(`Digit count is ${counter}`)

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.






do {
  let avg = 0
  const midterm = Number(prompt("Enter your midterm grade"))
  const final = Number(prompt("Enter your final grade"))
  avg = (midterm * 0.4) + (final * 0.6)
  console.log(`Your score is : ${avg}`);
  var again = prompt("Do you want to continue to calculate? (e/E)")
} while (again === "e" || again === "E");
