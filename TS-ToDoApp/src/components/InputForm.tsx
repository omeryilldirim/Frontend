import React, { useState } from 'react'

interface IInputForm {
  addTodo: AddFn
}

// type Task = string

const InputForm:React.FC<IInputForm> = ({addTodo}) => {
  const [task, setTask] = useState("")
  // const [task, setTask] = useState<Task>("")

const handleClick = () => {
    addTodo(task)
    setTask("")
}

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter todo..."
        type="text"
        maxLength={40}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        disabled={!task}
      >
        Add New Todo
      </button>
    </div>
  )
}

export default InputForm