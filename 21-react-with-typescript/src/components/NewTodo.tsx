import { useRef, useContext } from "react";
import { TodoContext } from '../store/todo-context';
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (event: React.FormEvent) : void => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if(enteredText.trim().length === 0) {
      // throw error
      return;
    }
    todoTextInputRef.current!.value = '';
    todosCtx.addTodo(enteredText);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
