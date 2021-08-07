import React from 'react';

export default function TodoForm() {


  return (
    <div className="todo-form">
      <form>
        <input type="text" placeholder="New Task" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
