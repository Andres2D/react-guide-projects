import React from "react";
import Todo from '../models/todo';
import Item from "./Item";
import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = ({items}) => {
  return (
    <ul className={styles.todos}>
      {
        items.map(({text, id}) => (
          <Item key={id} text={text} />
        ))
      }
    </ul>
  );
}

export default Todos;
