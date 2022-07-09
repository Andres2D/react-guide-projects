import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos(prevState => {
      return prevState.concat(newTodo);
    });
  };

  return (
    <div>
      <Todos items={todos} />
      <NewTodo onAddTodo={addTodoHandler} />
    </div>  
  );
}

export default App;
