import React from 'react';

export default function Greeting() {
  const date = new Date().toLocaleDateString();
  const name = "Levi";

  return (
    <div className="greeting">
      <h2>{date}</h2>
      <h1>Welcome back {name}!</h1>
    </div>
  )
}
