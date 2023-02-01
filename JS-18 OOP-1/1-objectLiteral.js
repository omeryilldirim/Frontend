//* ========================================
//*                (OOPS)
//* =========================================

//* Object Literals
console.log("**** Object Literals ****")

const book1 = {
  title: "The Karamazov Brothers",
  author: "Dostoevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
}

console.log(book1)
console.log(book1.getSummary())

//! Object nesnesinden miras yoluyla geldi.
console.log(book1.hasOwnProperty("year")) //?true

const book2 = {
  title: "The Lily of Valley",
  author: "Honere de Balzac",
  year: 1889,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
}

console.log(book2.getSummary())

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)
