import { useState } from 'react';
import styles from './App.module.css';
import AgeForm from './components/AgeForm';
import AgeRecords from './components/AgeRecords';
import Card from './UI/Card';
import Modal from './UI/Modal';

const App = () => {

  const [modal, setModal] = useState({
    open: false,
    message: 'This is the defualt message'
  });

  const [users, setUsers] = useState([]); 

  const formHandler = (form) => {
    if(form.user.trim().length === 0 || form.age.trim().length === 0) {
      setModal({
        open: true,
        message: 'Please enter a valid name and age (non-empty values).'
      });
    }else if(form.age < 1) {
      setModal({
        open: true,
        message: 'Please enter a valid age (>0).'
      });
    }else {
      setUsers(prevValue => [form, ...prevValue]);
    }
  }

  const closeHandler = () => {
    setModal({
      open: false,
      message: ''
    });
  }

  const records = users.map(obj => (
    <AgeRecords 
      key={Math.random()}
      user={obj.user}
      age={obj.age} />
  ))

  return (
    <div>
      <div className={styles.app}>
        <AgeForm onSubmitForm={formHandler} />
        {
          users.length > 0 &&
          <Card>
            {records}
          </Card>
        }
      </div>
      {
          modal.open && 
          <Modal
            onCloseModal={closeHandler}>
            <h3>{modal.message}</h3>  
            <button 
              onClick={closeHandler} 
              className={styles.btn}>
              Okay
            </button>
          </Modal>
        }
    </div>
  );
}

export default App;
