console.log('hello')

//classes

// class Employee {
//     empCode: number;
//     empName: string;

//     constructor (code:number, name:string){
//         this.empCode = code;
//         this.empName = name
//     }
// }

// let emp1 = new Employee(1, 'Mark')
// let emp2 = new Employee('1', 'Mark')


// Inheritance

// class Person{
//     name: string;
//     constructor(name: string){
//         this.name = name
//     }
// }

// class Employee extends Person{
//     emplyCode: number;

//     constructor(emplyCode: number, name: string){
//         super(name);
//         this.emplyCode = emplyCode;
//     }

//     display():void{
//         console.log(` Name: ${this.name}  - code ${this.emplyCode}`)
//     }
// }

// const empl1 = new Employee (2113, 'Yasin')
// const per1 = new Person('Feyza')

//Abstract class

// abstract class Vehicle {

//     year: number;
//     color: string;
//     constructor(year: number, color: string) {
//       this.year = year;
//       this.color = color;
//     }
  
//     startEngine(): void {
//       console.log(`Engine Started`)
//     }
  
//     abstract stopEngine(): void;
//   }

//   class Car extends Vehicle {
  
//     model: string;
//     numOfDoors: number
//     constructor(year: number, color: string, model: string, numOfDoors: number) {
//       super(year, color);
//       this.model = model;
//       this.numOfDoors = numOfDoors
//     }
  
//     stopEngine(): void {
//         console.log(' Car stopped !')
//     }
  
//   }
  
  
//   const car = new Car(1984, 'blue', 'bmw', 4);

//Data modifiers - Private

// class Person {
//     public name: string;
//     private age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     getAge(){
//         console.log(this.age)
//     }

//     setAge(newAge: number){
//         if(newAge > 0 && newAge <=100){
//             this.age = newAge
//         }else{
//             throw new Error('Invalid Age')
//         }
//     }

// }

// const Barry = new Person('Barry',25)

// Barry.getAge()
// Barry.setAge(26)
// Barry.getAge()


//static

// class Circle {
//     static pi: number = 3.14;
  
//     static calcArea(radius:number) {
//       return this.pi * radius * radius
//     }
//   }
  
// console.log(Circle.pi)
// console.log(Circle.calcArea(5))


//Interfaces

// interface Calender {
//     events: string[];
//     addEvents(event: string): void;
// }


// class LMSCalender implements Calender{
//     constructor(public events: string[]){}

//     addEvents(event: string): void {
//         this.events.push(event);
//     }
// }

// const cohort13 = new LMSCalender(['HTML','CSS', 'JS'])

// console.log(cohort13)

// cohort13.addEvents('Typescript')

// console.log(cohort13)


// interface Color {
//     color: {r: number, g: number, b: number};
// }

// const red:Color = {color: {r: 255, g:0, b:0}}

// interface Shape {
//     area: number;
// }

// let shape1: Shape = {area:255}

// class Square implements Color, Shape {
//     constructor( public color: {r: number, g: number, b:number}, public area: number){
//     }
// }

// const sq = new Square({r:0,g:0,b:100},255)
// console.log(sq)


//ınterfaces as s function

// interface Sum{
//     (num1: number, num2: number): number;
// }

// function add(n1: number, n2: number): number{
//     return n1+ n2;
// }

// function conC(n1: string, n2: string): string{
//     return n1+n2;
// }

// let arithemticAdd:Sum = add;

// console.log(arithemticAdd(2,5));

// let conCt:Sum = conC

// Problem & Solution

// function getArray<T>(items:T[]): T[]{
//     return new Array().concat(items)
// }

// let numArr = getArray([1,2,3,4])
// let strArr = getArray(['john', 'Mike', 'Alan'])
// strArr.push(3)  /* Error */
// numArr.push('Sally') /* Error */

// interface Result<T> {
//     data: T | null
// }

// const myData:Result<number> = {data: 35}
// const myData2:Result<string> = {data: '35'}
// const myData3:Result<null> = {data:null}

// myData.data=2


// class KeyValuePair<K,V> {
//     constructor(public key: K, public value: V) {}
//   }
  
//   let kvp = new KeyValuePair<number, string>(1,'a')
//   let shorter = new KeyValuePair('a',1)

// function displayType<T, U>(p1: T, p2: U){
//     console.log(`p1: ${typeof(p1)},p2: ${typeof(p2)}`)
// }

// displayType(console.log, 5 > 8) //p1: function,p2: boolean


// interface Product {
//     name: string; 
//     price: number;
// }

// function update<T extends object, U extends keyof T>(obj: T, prop: U, newValue: T[U]){
//     obj[prop] = newValue;
// }

// const product1:Product = {name: 'TV', price: 450}
// console.log(product1)

// update(product1, 'name', 'Monitor');

// console.log(product1)
// update(product1, 'price', 650)
// console.log(product1)


interface Product{
    id: number;
    name: string;
    price: number;
}

let product1: Required <Product> = {id:3,name:'three',price:500}
let product2: Partial <Product> = {id:3}
let product3: Readonly <Product> = {id:3,name:'three',price:500}
let product4: Pick <Product, 'id' | 'price'> = {id:3,price:500}
let product5: Omit <Product, 'name'> = {id:3,price:500}







