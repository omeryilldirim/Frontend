const input = document.getElementById("input")
const button = document.querySelector(".btn")
const toDoList = document.querySelector(".to-do ul")
const doneList = document.querySelector(".done ul")

button.addEventListener("click", ()=>{
    !input.value
    ? alert("Please enter a text")
    : (toDoList.innerHTML += `<li>${input.value}</li>`)
  input.value = ""
  input.focus()
})