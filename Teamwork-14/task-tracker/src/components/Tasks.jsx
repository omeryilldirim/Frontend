import React from 'react'
import Task from './Task'

const Tasks = ({todoList, setTodoList}) => {

  return (
    <div className='tasks'>
        {todoList.length ? (
            todoList.map(item => 
            <Task data={item} key={item.id} todoList={todoList} setTodoList={setTodoList}/>)
        ): (
            <p>No tasks to show</p>
        )}
    </div>
  )
}

export default Tasks