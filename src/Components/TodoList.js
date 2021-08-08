import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

export default function TodoList({ todos, addTask }) {

  return (
    <div className="todo-wrapper">
      <div className="todo-list">
        <h3 className="todo-header">Todos</h3>
        {todos.map(todo => {
          return (
              <Todo key={todo.id} todo={todo} />
          )
        })}
      </div>
      <TodoForm addTask={addTask}/>
      <button className="task-button" >New Task</button>
    </div>
  )
}
