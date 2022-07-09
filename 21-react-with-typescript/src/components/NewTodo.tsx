import { useRef } from "react";

const NewTodo = () => {

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (event: React.FormEvent) : void => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    if(enteredText?.trim().length === 0) {
      // throw error
      return;
    }
    
    console.log(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
