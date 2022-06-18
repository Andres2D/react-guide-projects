import useInput from "../hooks/use-input";

const regExp = /\S+@\S+\.\S+/;

const BasicForm = (props) => {

  const {
    value: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChange,
    inputBlurHandler: firstNameBlur,
    reset: firstNameReset
  } = useInput(value => value.trim() !== '');

  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChange,
    inputBlurHandler: lastNameBlur,
    reset: lastNameReset
  } = useInput(value => value.trim() !== '');

  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChange,
    inputBlurHandler: emailBlur,
    reset: emailReset
  } = useInput(value => value.trim() !== '' && value.toLocaleLowerCase().match(regExp));

  let invalidForm = true;

  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    invalidForm = false;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if(firstNameHasError || lastNameHasError || emailHasError) {
      return;
    }

    console.log({
      firstName,
      lastName,
      email
    });

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const firstNameInputClasses = firstNameHasError 
  ? 'form-control invalid'
  : 'form-control';

  const lastNameInputClasses = lastNameHasError 
  ? 'form-control invalid'
  : 'form-control';

  const emailInputClasses = emailHasError 
  ? 'form-control invalid'
  : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            value={firstName}
            onChange={firstNameChange}
            onBlur={firstNameBlur} 
          />
          { firstNameHasError && <p className="error-text">First name must not be empty.</p> }
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text' 
            id='lastName'
            value={lastName}
            onChange={lastNameChange}
            onBlur={lastNameBlur}  
          />
          { lastNameHasError && <p className="error-text">Last name must not be empty.</p> }
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='email' 
          id='email'
          value={email}
          onChange={emailChange}
          onBlur={emailBlur} 
        />
        { emailHasError && <p className="error-text">Email must be valid.</p> }
      </div>
      <div className='form-actions'>
        <button disabled={invalidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
