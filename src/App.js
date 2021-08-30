import './App.css';
import React, { useState } from 'react';
import TodoList from './Components/TodoList.js';


function App() {
  const [todos, setTodos] = useState([{id: 1, text: "Do laundry", complete: false}, {id: 2, text: "Clean room", complete: false}]);

  const addTask = (userInput) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: userInput,
        completed: false,
      }
    ]);
  }

  const handleToggle = (id) => {
    let mapped = todos.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task }});
    setTodos(mapped);
  }

  const handleDelete = () => {
    let filtered = todos.filter(todo => {
      return !todo.complete})
    setTodos(filtered)
  }

  return (
    <div className="App">
      <div className="main">
        <TodoList
          todos={todos}
          addTask={addTask}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
