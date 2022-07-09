import React from "react";
import Todo from '../models/todo';
import Item from "./Item";

const Todos: React.FC<{ items: Todo[] }> = ({items}) => {
  return (
    <ul>
      {
        items.map(({text, id}) => (
          <Item key={id} text={text} />
        ))
      }
    </ul>
  );
}

export default Todos;
