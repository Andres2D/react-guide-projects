import useInput from '../hooks/use-input';

const regExp = /\S+@\S+\.\S+/;

const SimpleInput = () => {

  const { 
    value: enteredName, 
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail, 
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.toLocaleLowerCase().match(regExp));

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log({
      enteredName,
      enteredEmail
    })

    resetNameInput('');
    resetEmailInput('');
  };
  
  const nameInputClasses = nameInputHasError 
    ? 'form-control invalid' 
    : 'form-control';
  
    const emailInputClasses = emailInputHasError 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        { nameInputHasError && <p className='error-text'>Name must not be empty.</p> }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler} 
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        { emailInputHasError && <p className='error-text'>Email must be valid.</p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
