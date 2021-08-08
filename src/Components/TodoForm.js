import React, { useState } from 'react';

export default function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input value={userInput} type="text" placeholder="New Task" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
