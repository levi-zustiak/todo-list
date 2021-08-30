import React, { useState } from 'react';

export default function TodoForm({ addTask, handleToggle }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === '') alert('please enter a task');
    else addTask(userInput);
     setUserInput('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={userInput} type="text" placeholder="New Task" onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}
