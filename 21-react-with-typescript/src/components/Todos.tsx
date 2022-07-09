import React, {useContext} from "react";
import { TodoContext } from '../store/todo-context';
import Item from "./Item";
import styles from './Todos.module.css';

const Todos: React.FC = () => {

  const todosCtx = useContext(TodoContext);

  return (
    <ul className={styles.todos}>
      {
        todosCtx.items.map(({text, id}) => (
          <Item onClickItem={todosCtx.removeTodo.bind(null, id)} key={id} text={text} />
        ))
      }
    </ul>
  );
}

export default Todos;
