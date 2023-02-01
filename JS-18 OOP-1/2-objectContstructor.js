//* =============================================
//*        OOP - Object Constructor (ES5)
//* =============================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor

function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`
  //   }
}

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getSummary() fonksiyonunu miras alabilir.
//* Ancak, getSummary() fonksiyonu bellekte sadece bir yer kaplamaktadir.

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`
}

//! Book kalibinda yeni bir ornek (instance) olusturduk.
const book1 = new Book("Kasagi", "Ömer Seyfettin", 1920)
console.log(book1)
console.log(book1.getSummary())

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.
console.log(Book.prototype)
console.log(book1.__proto__)

//? instance
const book2 = new Book("Simyaci", "Pauolo Coelho", 1990)
console.log(book2.getSummary())

// book1.price = 250
Book.prototype.price = 0
book1.price = 200
book2.price = 300

console.log(book1, book2)
// console.log(new Date().getFullYear())

//? INHERITANCE (Kalitim - ES5)
//?----------------------------------------------------------

//? Sub-Class
function Magazine(title, author, year, month) {
  //? INHERITANCE
  Book.call(this, title, author, year)
  this.month = month
}

//! Prototipleri miras almak icin Object.create() metodu kullanabilir.
Magazine.prototype = Object.create(Book.prototype)

const mag1 = new Magazine("SRE", "Einstion", 1930, "Nov")
console.log(mag1)

//! Prototipler dogrudan miras olarak gelmez.
console.log(mag1.getSummary())
