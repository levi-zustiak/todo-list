import React from 'react';

export default function Todo({ todo, handleToggle }) {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <div id={todo.id} className="todo" onClick={handleClick}>
      <p>{todo.text}</p>
    </div>
  )
}
