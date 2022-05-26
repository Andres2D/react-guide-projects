import { useState } from 'react';
import styles from './App.module.css';
import AgeForm from './components/AgeForm';
import AgeRecords from './components/AgeRecords';

const App = () => {
  const [users, setUsers] = useState([]); 

  const formHandler = (form) => {
    setUsers(prevValue => [form, ...prevValue]);
  }

  return (
    <>
      <div className={styles.app}>
        <AgeForm onSubmitForm={formHandler} />
        {
          users.length > 0 &&
          <AgeRecords users={users} />
        }
      </div>
    </>
  );
}

export default App;
