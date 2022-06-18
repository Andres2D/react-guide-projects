import { useState } from 'react';

const regExp = /\S+@\S+\.\S+/;

const SimpleInput = () => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = 
    enteredEmail.trim() !== '' && enteredEmail.toLocaleLowerCase().match(regExp) 
    ? true 
    : false;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }
  
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log({
      enteredName,
      enteredEmail
    })

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };
  
  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';
  
    const emailInputClasses = emailInputIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        { nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p> }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler} 
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        { emailInputIsInvalid && <p className='error-text'>Email must be valid.</p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
