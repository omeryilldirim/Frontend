import { IoClose } from "react-icons/io5";

const Task = ({todoList,setTodoList,data:{id,name,date,isCompleted}}) => {

const handleDoubleClick = (id)=>{
    const updatedTodoList = todoList.map((item)=>item.id === id && {...item, isCompleted:!isCompleted})
    console.log(updatedTodoList);
    setTodoList(updatedTodoList)
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

const handleDeleteTask = (id)=>{
    const updatedTodoList = todoList.filter((item)=> item.id !== id)
    setTodoList(updatedTodoList)
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

  return (
    <div className={isCompleted ? "task-done" : "task-todo"} >
      <div className="task-info" onClick={()=>handleDoubleClick(id)}>
        <h3 className="task-name">{name}</h3>
        <p className="task-date" >Deadline: {date.split("T")[0]} , {date.split("T")[1]}</p>
      </div>
      <div className="btn-remove" >
        <span onClick={()=> handleDeleteTask(id)}><IoClose color="red" size="2rem"/></span>
      </div>
    </div>
  );
};

export default Task;
