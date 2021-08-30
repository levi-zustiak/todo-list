import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

export default function TodoList({ todos, addTask, handleToggle, handleDelete }) {

  return (
    <div className="todo-wrapper">
    <h3 className="todo-header">Todos</h3>
      <div className="todo-list">
          <h4 className="count">Tasks remaining: {todos.length} </h4>
        <div className="todos-container">
          {todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
              />
            )
          })}
        </div>
        <TodoForm addTask={addTask}/>
      </div>
      <button className="clear-button" onClick={handleDelete}>Clear complete</button>
    </div>
  )
}
