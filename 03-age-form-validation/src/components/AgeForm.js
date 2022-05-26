import {useState} from 'react';
import Button from '../UI/Butotn';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import styles from './AgeForm.module.css';
import Wrapper from './helpers/Wrapper';

const AgeForm = props => {

  const [userForm, setUserForm] = useState({
    user: '',
    age: ''
  });

  const [modal, setModal] = useState({
    open: false,
    message: 'This is the defualt message'
  });

  const userChangeHandler = (evt) => {
    setUserForm(prevValue => {
      return {...prevValue, user: evt.target.value}
    });
  }

  const ageChangeHandler = (evt) => {
    setUserForm(prevValue => {
      return {...prevValue, age: evt.target.value}
    });
  }

  const closeHandler = () => {
    setModal({
      open: false,
      message: ''
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(userForm.user.trim().length === 0 || userForm.age.trim().length === 0) {
      setModal({
        open: true,
        message: 'Please enter a valid name and age (non-empty values).'
      });
    }else if(userForm.age < 1) {
      setModal({
        open: true,
        message: 'Please enter a valid age (>0).'
      });
    }else {
      props.onSubmitForm(userForm);
      setUserForm({
        user: '',
        age: ''
      });
    }
  }

  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <Card>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-control']}>
              <label htmlFor='userName' className={styles.label}>Username</label>
              <input 
                id='userName'
                className={styles.input} 
                type='text'
                value={userForm.user}
                onChange={userChangeHandler} 
                />
            </div>
            <div className={styles['form-control']}>
              <label htmlFor='age' className={styles.label}>Age (Years)</label>
              <input 
                id='age'
                className={styles.input} 
                type='number' 
                value={userForm.age}
                onChange={ageChangeHandler}
                />
            </div>
            <Button
              onClick={handleSubmit}
              type='submit'>
                Add User
            </Button>
          </form>
        </Card>
        {
          modal.open && 
          <Modal
            onCloseModal={closeHandler}>
            <h3>{modal.message}</h3>  
            <Button
              className={styles.btn}
              onClick={closeHandler}>
                Okay
            </Button>
          </Modal>
        }
      </div>
    </Wrapper>
  )
}

export default AgeForm;
