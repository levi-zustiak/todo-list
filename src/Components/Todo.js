import React from 'react';

export default function Todo(props) {

  return (
    <div className="todo">
      <p>{props.todo.text}</p>
      <p>{props.todo.complete ? 'complete' : 'incomplete'}</p>
    </div>
  )
}
