import React from 'react';
import { useState } from 'react';
import TodoContextObj from '../models/todo-ctx';
import Todo from '../models/todo';

type Props = {
  children?: any
}; 

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {}
});

const TodoContextProvider: React.FC<Props> = (props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos(prevState => {
      return prevState.concat(newTodo);
    });
  };

  const removeItemHandler = (id: string) => {
    setTodos(prevState => {
      return prevState.filter(i => i.id !== id);
    })
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeItemHandler
  };

  return (
    <TodoContext.Provider  value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
