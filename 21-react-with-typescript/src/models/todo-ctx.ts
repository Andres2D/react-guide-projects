import Todo from './todo';

interface TodoContextObj {
  items: Todo[],
  addTodo: (todoText: string) => void,
  removeTodo: (id: string) => void,
}

export default TodoContextObj;
