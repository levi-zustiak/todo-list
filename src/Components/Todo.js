import React from 'react';

export default function Todo({ todo }) {

  return (
    <div className="todo">
      <p>{todo.text}</p>
    </div>
  )
}
