// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const names = ["emir", "oğuzhan", "levent", "tarik"];

console.log(names);

//? 4 (names dizisinin lenght property'sine erisiyoruz.)
//* non-primitive verilerde ozellikler olabilir ve bunlara
//* erisim . notasyonu ile olabilir.
console.log(names.length);

const x = 5.234; //? primitive
console.log(x.toFixed(2)); //? object wrapper sayesinde
//? Primitive'lerde normal sartlarda property olmaz.

//? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
//? primitive verileri bir obje sarmlayicisi ile sarmalar.

console.log(typeof names); //? JS de array aslinda object dedigimiz base object'den turetilmistir.

const emptArr = [];
console.log(emptArr);

// ! 2.Yöntem (Object Constructor)
const codingLangs = new Array("C", "C++", "JS", "Go");
console.log(codingLangs);

const numbers = new Array(3, 2, 1);
console.log(numbers); //? (3) [3, 2, 1]

//? 10 elemanli bos bir dizi olusturur.
const numbers1 = new Array(10);
console.log(numbers1); //?(10) [empty × 10]

// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3);
console.log(number2); //?(3) [1, 2, 3]

const numbers3 = Array.of(5);
console.log(numbers3); //? [5]

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

const names1 = [
  "emir",
  "oğuzhan",
  "levent",
  "tarik",
  "Sabata",
  "Mehtap",
  "Rose",
];
console.log(names1[1]); //? oğuzhan
const tarik = names1[3];
console.log(tarik); //?tarik

//? Dizinin en son elemanini okumak istiyoruz.
console.log(names1[5]); //? Mehtap, (hard-coded)

const lastEl = names1[names1.length - 1];
console.log(lastEl); //? Rose

//? Alternative olarak at() metodu
console.log(names1.at(-3)); //? Sabata

//!  Diziye veri yazma
names1[2] = "Levent";
// names1[2] = names1[2].toUpperCase()
//? assigning yapildiginda etki eder.

console.log(names1);

//! Identifier 'names' has already been declared
// const names = ["ismet", "canan"]

// names = ["ismet", "canan"] //! Assignment to constant variable.

//! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tutulan adresinin degistirilmesini engeller.

//! Diziler farkli veri tiplerini bir arada saklayabilir.
const ageArr = [22, 44, 55];
const people = [
  "John",
  "Varmont",
  new Date().getFullYear() - 1990,
  true,
  ageArr,
];

console.log(people[4]); //?(3) [22, 44, 55]

console.log(++people[4][1]); //? 45

console.log(people); //?(3) [22, 45, 55]
console.log(ageArr); //?  ['John', 'Varmont', 33, true,  [22, 45, 55]]
ageArr[0]--;

console.log(people); //?(5) ['John', 'Varmont', 33, true, [21, 45, 55])]

//! Bir dizi icerisine baska bir diziyi koyarsak aslinda dizinin
//! tum verileri kopyalanmaz sadece o dizinin refransi konulur.
//! Dolayisiyla disarida bu dizideki bir degisikli diger dimizie de yansir.
//! Cunku JS cogu durumda sig (shallow copying) yapar.
//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

//** pop() son elemani siler ve sildigi elemani dondurur.
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];
console.log(cars.pop());
console.log(cars);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
console.log("LEN:", cars.push("Lexus"));
console.log(cars);

// cars.push = "hyundai" //? diziye yeni bir properyt(degisken) eklendi
// console.log(cars)
// console.log(cars.push)

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
console.log(cars.unshift("Togg"));
console.log(cars);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
console.log(cars.shift());
console.log(cars);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

cars.splice(1, 0, "VW");
console.log(cars); //?(5) ['BMW', 'VW', 'Mercedes', 'Fiat', 'Lexus']

cars.splice(3, 1, "Maseratti");
console.log(cars);

//* Dizinin tamamini ters siraya cevirir.
cars.reverse();
console.log(cars);

//*sort() Diziyi alfabetik olarak siralar.
//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.

cars.sort(); //? text'leri mantikli bir sekilde siralar
console.log(cars);

const numbers4 = [2, 3, 22, 1, 5, 7, 6];
numbers4.sort(); //? Siralama yanlis cikabilir.
console.log(numbers4);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.

numbers4.sort((a, b) => a - b);
console.log(numbers4); //?(7) [1, 2, 3, 5, 6, 7, 22]

numbers4.sort((a, b) => b - a);
console.log(numbers4); //?(7) [22, 7, 6, 5, 3, 2, 1]

//! Senior Level
// ----------------------------------------------------
//! Find the closest palindrome number for your code:

// Example:
// Input: 216
// Output: 212

// Input: 100
// Output: 99

// Input: 77
// Output: 77

// NOTE:
// - palindrome number is number is same from left - right side
// - If the number itself is a palindrome, return that number.
// - If two palindrome numbers distance is same choose smaller number.


const findPalindrome = number =>  {
  const checkPalindrome = (n) => {
    let str = n.toString();
    str = str.split("").reverse().join("");
    if (str == n) {
      return true;
    } else {
      return false;
    }
  }

  if (checkPalindrome(number)) {
    return number;
  } else {
    let up = number+1;
    let down = number-1
    while (true) {
      if (checkPalindrome(down)) {
        return down;
      }
      if (checkPalindrome(up)) {
        return up;
      }
    }
  }
}

console.log(findPalindrome(216));
console.log(findPalindrome(100));
console.log(findPalindrome(77));
//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================
