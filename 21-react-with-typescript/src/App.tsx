import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {

  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
  ];

  return (
    <div>
      <Todos items={todos} />
      <NewTodo />
    </div>  
  );
}

export default App;
