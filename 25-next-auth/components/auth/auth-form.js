import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import classes from './auth-form.module.css';

const createUser = async(email, password) => {
  console.log(email, password);
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if(!response.ok) {
    throw new Error(data.message || 'Error in back');
  }

  return data;
};

const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async(evt) => {
    evt.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if(isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      console.log(result);

      if(!result.error) {
        // se auth state
      }

    } else {
      try {
        const result = await createUser(email, password);
        console.log(result);
      }catch(err) {
        console.log(err);
      }
    }
  };

  return (
    <section onSubmit={submitHandler} className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button type='submit' >{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
