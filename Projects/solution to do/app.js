//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

// load event vs DomContentLoaded
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  // get todolist from localstorage and load to UI
  todoList.forEach((todo) => {
    createToDo(todo);
  });
};

//form => submit event vs button => click event
// form.addEventListener("submit", ()=>{}) //!! formda submit type ile button kullanmak daha güzel bir kullanım olur çünkü tüm inputları tek seferde servera göndermiş olur. ayrıca formda entera basınca inputu kendiliğinden gönderiyor, tekrar keypress kullanmaya gerek yok. inputları temizlerken de form reset() kullanrak tüm formu temizlemiş oluyoruz.

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please enter a text");
    return;
  }
  const newTodo = {
    id: new Date().getTime(), // unique id with miliseconds
    completed: false, // status
    text: todoInput.value, // user input
  };

  createToDo(newTodo);

  todoList.push(newTodo);
  //localStorage todoList update
  localStorage.setItem("todoList", JSON.stringify(todoList));

  //! important questions : localStorage vs sessionStorage vs cookies
  //! event.target vs event.currentTarget
  e.target.closest("form").reset();
});

const createToDo = (newTodo) => {
  //todo item creation
  const { id, completed, text } = newTodo;

  //create li
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //add class with completed status
  completed ? li.classList.add("checked") : "";

  //create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");

  //! append vs appenChild
  li.append(icon);

  //create item text
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //create remove icon
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  //append li to ul
  todoUl.append(li);
};

//! Capturing vs Bubbling

todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    //update UI
    e.target.parentElement.classList.toggle("checked");
    //update array (forEach or map)
    todoList.map((todo)=>{
        if(todo.id == idAttr){
            todo.completed = !todo.completed
        }
    })
    //add updated array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    //remove from UI
    e.target.parentElement.remove();
    //remove from array
    //filter with remaining todos and update array
    todoList = todoList.filter((todo) => todo.id != idAttr);
    //add updated array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    alert("other element clicked");
  }
});
