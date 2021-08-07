import React from 'react';
import Todo from './Todo.js';

export default function TodoList(props) {
  const handleClick = () => {
    props.newTodo(
      alert('clicked')
    )
  }

  return (
    <div className="todo-wrapper">
      <div className="todo-list">
        <h3 className="todo-header">Todos</h3>
        {props.todos.map((todo, index) => {
          return (
            <div key={index}>
              <Todo todo={todo} />
            </div>
          )
        })}
      </div>
      <button className="task-button" onClick={handleClick}>New Task</button>
    </div>
  )
}
