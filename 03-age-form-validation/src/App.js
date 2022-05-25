import { useState } from 'react';
import styles from './App.module.css';
import AgeForm from './components/AgeForm';
import AgeRecords from './components/AgeRecords';
import Card from './UI/Card';

const App = () => {
  const [users, setUsers] = useState([]); 

  const formHandler = (form) => {
    setUsers(prevValue => [form, ...prevValue]);
  }

  const records = users.map(obj => (
    <AgeRecords 
      key={Math.random()}
      user={obj.user}
      age={obj.age} />
  ))

  return (
    <div className={styles.app}>
      <AgeForm onSubmitForm={formHandler} />
      {
        users.length > 0 &&
        <Card>
          {records}
        </Card>
      }
    </div>
  );
}

export default App;
