import {useRef, useState} from 'react';
import Button from '../UI/Butotn';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import styles from './AgeForm.module.css';
import Wrapper from './helpers/Wrapper';

const AgeForm = props => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [modal, setModal] = useState({
    open: false,
    message: 'This is the defualt message'
  });

  const closeHandler = () => {
    setModal({
      open: false,
      message: ''
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setModal({
        open: true,
        message: 'Please enter a valid name and age (non-empty values).'
      });
    }else if(enteredAge < 1) {
      setModal({
        open: true,
        message: 'Please enter a valid age (>0).'
      });
    }else {
      const userForm = {
        user: enteredName,
        age: enteredAge
      }
      props.onSubmitForm(userForm);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
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
                ref={nameInputRef}
                />
            </div>
            <div className={styles['form-control']}>
              <label htmlFor='age' className={styles.label}>Age (Years)</label>
              <input 
                id='age'
                className={styles.input} 
                type='number' 
                ref={ageInputRef}
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
