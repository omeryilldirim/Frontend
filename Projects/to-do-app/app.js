//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-button");
const todoUl = document.querySelector(".todo");
const doneUl = document.querySelector(".done")
const audio = new Audio("./assets/pencil.mp3");
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
  // get date and day then load to UI
  // const dayInt = new Date().getDay()
  // const date = (new Date().getDate())+"."+(new Date().getMonth()+1)+"."+(new Date().getFullYear())
  // document.getElementById("date").innerText = date
  // document.getElementById("happyDay").innerText = `${days[dayInt]}`
});

// get todolist from localstorage and load to UI
const getTodoListFromLocalStorage = () => {
  todoList.forEach((todo) => {
    createToDo(todo);
  });
};

const createToDo = (newTodo) => {
  //todo item creation
  const { id, completed, text } = newTodo;

  //create todo list element
  const li = document.createElement("li");
  li.setAttribute("id", id);
  li.setAttribute("completed", completed)
  //create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  li.append(icon);
  //create item text
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);
  //create removeIcon
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);
  //check completed status and append li to ul
  completed ? doneUl.append(li) : todoUl.append(li);
};

// addBtn click event
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // if input is empty, alert()
  if (todoInput.value.trim() === "") {
    alert("Please enter a text");
    return;
  }
  // declare user input as object
  const newTodo = {
    id: new Date().getTime(),
    completed: false,
    text: todoInput.value,
  };
  //create todo and load to UI
  createToDo(newTodo);
  audio.play()
  //push new todo to todolist
  todoList.push(newTodo);
  //localStorage todoList update
  localStorage.setItem("todoList", JSON.stringify(todoList));

  e.target.closest("form").reset();
});


//to-do elements event
todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  
  if (e.target.classList.contains("fa-check")) {
    //update UI
    doneUl.append(e.target.closest("li"))
    //update array
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
  }
});

//done elemenst event
doneUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    //update UI
    todoUl.append(e.target.closest("li"))
    //update array
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
  }
});
