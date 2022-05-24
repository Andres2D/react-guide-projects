import {useState} from 'react';
import Card from '../UI/Card';
import styles from './AgeForm.module.css';

const AgeForm = props => {

  const [userForm, setUserForm] = useState({
    user: '',
    age: ''
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmitForm(userForm);
    setUserForm({
      user: '',
      age: ''
    });
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-control']}>
          <label className={styles.label}>Username</label>
          <input 
            className={styles.input} 
            type='text'
            value={userForm.user}
            onChange={userChangeHandler} 
            />
        </div>
        <div className={styles['form-control']}>
          <label className={styles.label}>Age (Years)</label>
          <input 
            className={styles.input} 
            type='number' 
            value={userForm.age}
            onChange={ageChangeHandler}
            />
        </div>
        <button type='submit' className={styles.btn}>Add User</button>
      </form>
    </Card>
  )
}

export default AgeForm;
