import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import TodoList from './Components/TodoList.js';
import Greeting from './Components/Greeting.js';


function App() {
  const [todos, setTodos] = useState([{text: "Do laundry", complete: false}, {text: "Clean room", complete: false}]);

  const newTodo = (item) => {

  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <TodoList todos={todos} newTodo={newTodo} />
        <Greeting />
      </div>
    </div>
  );
}

export default App;
