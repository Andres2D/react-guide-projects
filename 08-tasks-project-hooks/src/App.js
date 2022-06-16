import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useRequest from './hooks/use-request';

function App() {

  const transformedTasks = useCallback((tasksObject) => {
    const loadedTasks = [];
    for (const taskKey in tasksObject) {
      loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const { error, isLoading, sendRequest: fetchTasks } = useRequest(); 
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks({
      url: 'https://react-http-22e9d-default-rtdb.firebaseio.com/tasks.json'
    }, transformedTasks);
  }, [fetchTasks, transformedTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
