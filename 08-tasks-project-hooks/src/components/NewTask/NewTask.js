import useRequest from '../../hooks/use-request';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const addedTask = (taskText, data) => {
    const generatedId = data.name;
    const createdTask = { id: generatedId, text: taskText};
    props.onAddTask(createdTask);
  }

  const { 
    error,
    isLoading,
    sendRequest
  } = useRequest(); 

  const enterTaskHandler = async (taskText) => {
    sendRequest({
      url: 'https://react-http-22e9d-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: { text: taskText }
    }, addedTask.bind(null, taskText));    
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
