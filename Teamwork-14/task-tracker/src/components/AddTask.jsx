import { useEffect, useState } from "react";

const AddTask = ({ todoList, setTodoList }) => {
  const [showBar, setShowBar] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSaveTask = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        name: taskName,
        date: taskDate,
        isCompleted: false,
      },
    ]);
    document.getElementById("form").reset();
    setTaskName("");
    setTaskDate("");
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="add-task">
      <button className="show-btn" onClick={() => setShowBar(!showBar)}>
        {showBar ? "Close 'Add Task Bar'" : "Show 'Add Task Bar'"}
      </button>
      {showBar && (
        <form onSubmit={handleSaveTask} id="form">
          <label htmlFor="task-name">Task</label>
          <input
            type="text"
            name="task"
            id="task-name"
            onChange={(e) => setTaskName(e.target.value)}
          />

          <label htmlFor="task-date">Day & Time</label>
          <input
            type="datetime-local"
            name="task"
            id="task-date"
            onChange={(e) => setTaskDate(e.target.value)}
          />

          <button type="submit" className="save-task-btn">
            Save Task
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTask;
