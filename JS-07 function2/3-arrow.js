// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

//* ÖRNEK :  Silindir Hacmi
//************************** pi * r** * h*/

const r = +prompt("r:");
const h = +prompt("h:");

const volume = (a, b) => Math.PI * a * a * b;

console.log(`${r}, ${h} = Volume : ${volume(r, h).toFixed(4)}`);

//? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
//? kisimlarinin ne kadarini gosterilecegini belirlemek icin
//? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.
console.log(`${r}, ${h} = Volume : ${volume(r, h).toPrecision(4)}`);

//? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak
//? gosterimesi icin kullanilabilir. Aldigi parametre ise kesirli
//? kisimlarinin basamak sayini gosterir.
console.log(`${r}, ${h} = Volume : ${volume(r, h).toExponential(4)}`);

//! alternative way

const volumeLong = (a, b) => {
  const result = Math.PI * a * a * b;
  console.log(result);
};
console.log(`${r}, ${h} = Volume : ${volume(r, h).toExponential(4)}`);
