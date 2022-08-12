import { useRef } from 'react';
import classes from './NewsletterRegistration.module.css';

const NewsletterRegistration = () => {

  const emailRef = useRef();

  const registrationHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value; 
    if(!email) {
      return;
    }

    fetch('/api/newsletter-registration', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            ref={emailRef}
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
