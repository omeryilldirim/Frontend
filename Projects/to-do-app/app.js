//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-button");
const todoUl = document.querySelector(".todo");
const doneUl = document.querySelector(".done")
const audio = new Audio("./assets/pencil.mp3");
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
  // get date and day then load to UI
  const dayInt = new Date().getDay()
  const date = (new Date().getDate())+"."+(new Date().getMonth()+1)+"."+(new Date().getFullYear())
  document.getElementById("date").innerText = date
  document.getElementById("happyDay").innerText = `${days[dayInt]}`
});

// get todolist from localstorage and load to UI
const getTodoListFromLocalStorage = () => {
  todoList.forEach((todo) => {
    createToDo(todo);
  });
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // if input is empty, alert()
  if (todoInput.value.trim() === "") {
    alert("Please enter a text");
    return;
  }
  // declare user input as object var
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
  console.log(todoList);
  //localStorage todoList update
  localStorage.setItem("todoList", JSON.stringify(todoList));

  e.target.closest("form").reset();
});

const createToDo = (newTodo) => {
  //todo item creation
  const { id, completed, text } = newTodo;

  //create todo list element
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //add class with completed status
  // completed && li.classList.add("checked")

  //create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
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
    // alert("other element clicked");
  }
});
