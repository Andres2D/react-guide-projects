import React from "react";
import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = ({items}) => {
  return (
    <ul>
      {
        items.map(({text, id}) => (
          <li key={id}>{text}</li>
        ))
      }
    </ul>
  );
}

export default Todos;
