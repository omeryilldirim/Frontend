//Elements
const todoInput =  document.getElementById("todo-input")
const addBtn =  document.querySelector("#todo-button")
const todoUl =  document.querySelector("#todo-ul")

let todoList = JSON.parse(localStorage.getItem("todoList")) || []

// load event vs DomContentLoaded
window.addEventListener("load", ()=>{
    getTodoListFromLocalStorage()
})

const getTodoListFromLocalStorage = () =>{
    // get todolist from localstorage and load to UI
}

//form => submit event vs button => click event
// form.addEventListener("submit", ()=>{}) //! formda submit type ile button kullanmak daha güzel bir kullanım olur çünkü tüm inputları tek seferde servera göndermiş olur. ayrıca formda entera basınca inputu kendiliğinden gönderiyor, tekrar keypress kullanmaya gerek yok.

addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
})