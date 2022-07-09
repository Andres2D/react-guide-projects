import React from "react";
import Todo from '../models/todo';
import Item from "./Item";
import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemoveItem: (id: string) => void }> = ({items, onRemoveItem}) => {
  return (
    <ul className={styles.todos}>
      {
        items.map(({text, id}) => (
          <Item onClickItem={onRemoveItem.bind(null, id)} key={id} text={text} />
        ))
      }
    </ul>
  );
}

export default Todos;
