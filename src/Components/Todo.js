import React from 'react';

export default function Todo({ todo, handleToggle }) {

  const handleClick = (e) => {
    handleToggle(e.currentTarget.id)
  }

  return (
    <div id={todo.id} className="todo" onClick={handleClick}>
      <input type="checkbox" className="checkbox" id={todo.id} checked={todo.complete}/>
      <label htmlFor={todo.id}>{todo.text}</label>
    </div>
  )
}
