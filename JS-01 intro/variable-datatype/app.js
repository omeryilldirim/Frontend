console.log("***** Data Types *****");

//* CONST ve LET, ECMASCRIPT ile gelmiştir. VAR eski versiypnardan beri bulunmaktadır.

//? ==================== CONST ======================

const fs = "cohort 13";
console.log(fs);

const number = 20;
console.log(number);
console.log(typeof number);

//* Tirnak icindekiler string (text) olarak atanir.
const sayi1 = "33";
console.log(sayi1);
console.log(typeof sayi1);

// sayi1 = 55; //!Assignment to constant variable.

// const pi; //! Missing initializer in const
// pi = 3.14

const s1 = "hello ";
const s2 = "FS13";
console.log(s1 + s2); //? String Concationation
// JS default olarak + operatorunde eger degiskenlerden en az birisi string ise bunlari birine ekler. (Toplama yapmaz)

const n1 = "5";
const n2 = 10;
console.log(n1 + n2); //? String Concationation

//! Ayni alan (scope) icerisinde ayni isimle yeniden degisken tanimlanamaz.
// const n1 = 5;

// n2 = n2 + 1; //! error

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil = "javascript";
console.log(dil);

dil = "java";
console.log(dil);

dil = true;
console.log(dil, typeof dil);

dil = 3.14;
console.log(dil, typeof dil);

let cohort;
console.log(cohort); //* undefined (tanimsiz, type'ı yok)

cohort = 3;
console.log(typeof cohort); //? number

// let cohort = "FS13"; //!SyntaxError: Identifier 'cohort' has already been declared (at app.js:60:5)
//! Ayni alan (scope) icerisinde ayni isimle yeniden degisken tanimlanamaz.

let num1 = 5;
let num2 = 3;
let result = num1 + num2; //?8
console.log(++result); //?9
console.log(result);

//! JS ilk kez gormus oldugu count'u bir degisken olarak tanimladi
count = 55; //! var olarak tanimladi.
console.log(count);
count = 22;
console.log(count, typeof count);

//? ===================  VAR ===============================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.

var x = 11;
console.log(x);

//? Cesitli blok (scope) ornekleri
// if(){
//   let  x= 5

// }else{
//  x
// }
// x

// for(){
//    const y=4

// }
// console.log(y)

//? Bir block oluşturduk. Blok denilince if-else,
//? switch-case, fonksiyon vb. yapilarin ic alani dusunulebilir.
{
  //! Burasi local bir alandir.
  let a = 2;
  const b = 3;
  console.log(a, b);
}
//! a ve b bu alanda tanimli degildir.
// console.log(a, b); //! error

{
  //! Burasi local bir alandir.
  var c = 99; //?var ile tanimlanan bir degisken hep global olur.
  console.log(c);
}
console.log(c);

//? Her hangi bir bloğun dışı global alandir
var varNumber = 1; //*Global degiskenler
let letNumber = 2;

{
  varNumber = 11; //* Global degiskenlere veri yaziyoruz
  letNumber = 22;
}
//* Global degiskenleri okuyoruz.
console.log(varNumber, letNumber);

console.log("**********************");

//*Global degiskenler
var varNumber1 = 3;
let letNumber1 = 4;
{
  var varNumber1 = 33;
  let letNumber1 = 44; //! yeni bir local degisken olsuturduk
  console.log(letNumber1); //! local degiskeni okuduk
}

//* Global degiskenleri okuyoruz
console.log(varNumber1, letNumber1);
