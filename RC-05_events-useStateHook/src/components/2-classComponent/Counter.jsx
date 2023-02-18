//? ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//! State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistirilebilir.
//* ====================================================================

import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
        
      //! state başlangıç değeri verildi
      this.state = {
        count : 0
      }

        //  this.increment = function (){
        //  }

      //? increment metodunu Counter classına bağlanması(bind)
      this.increment = this.increment.bind(this)

    }

    increment(){
        this.setState({count:this.state.count + 1})
    }

    //? arrow function ile yazdığımızda bağlamaya gerek yok 
    decrement = () => {
        this.setState({count:this.state.count - 1})
    }

    render() {
        return (
        <div className='container text-center mt-4'>
            <h2 className='text-danger'>Class Components</h2>
            <h1 className='display-4'>Count:{this.state.count}</h1>
            <button onClick={this.increment} className="btn btn-success">INC</button>
            <button onClick={()=> this.setState({count:0})} className="btn btn-danger">CLR</button>
            <button onClick={this.decrement} className="btn btn-warning">DEC</button>
        </div>
        )
  }
}

export default Counter