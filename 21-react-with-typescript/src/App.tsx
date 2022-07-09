import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {

  // const [first, setfirst] = useState(second);

  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
  ];

  const addTodoHandler = (todo: string) => {
    console.log(todo);
  };

  return (
    <div>
      <Todos items={todos} />
      <NewTodo onAddTodo={addTodoHandler} />
    </div>  
  );
}

export default App;
