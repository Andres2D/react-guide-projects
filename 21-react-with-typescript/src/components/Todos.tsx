import React from "react";
import Todo from '../models/todo';
import Item from "./Item";
import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemoveItem: (id: string) => void }> = ({items, onRemoveItem}) => {

  const removeItemHandler = (id: string) => {
    onRemoveItem(id);
  };

  return (
    <ul className={styles.todos}>
      {
        items.map(({text, id}) => (
          <Item onClickItem={removeItemHandler} id={id} key={id} text={text} />
        ))
      }
    </ul>
  );
}

export default Todos;
