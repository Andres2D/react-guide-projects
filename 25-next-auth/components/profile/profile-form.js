import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm(props) {

  const newPasswordRef = useRef();
  const oldPasswordRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();
    
    const newPassword = newPasswordRef.current.value;
    const oldPassword = oldPasswordRef.current.value;

    console.log(newPassword, oldPassword);

    // valid inputs (todo)

    props.onChangePassword({ newPassword, oldPassword });
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordRef} type='password' id='new-password' />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input ref={oldPasswordRef} type='password' id='old-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
