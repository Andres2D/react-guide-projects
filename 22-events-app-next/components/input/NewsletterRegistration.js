import { useRef, useContext } from 'react';
import classes from './NewsletterRegistration.module.css';
import NotificationContext from '../../store/notification-context';

const NewsletterRegistration = () => {

  const notificationCtx = useContext(NotificationContext);
  const emailRef = useRef();

  const registrationHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value; 
    if(!email) {
      return;
    }

    notificationCtx.showNotification({
      title: 'Signing up ...',
      message: 'Registering for newsletter',
      status: 'pending'
    });

    fetch('/api/newsletter-registration', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }

      res.json().then(data => {
        throw new Error(data.message || 'Something went wrong!');
      });
    })
    .then(data => {
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Successfully registered for newsletter',
        status: 'success'
      });
    })
    .catch(err => {
      notificationCtx.showNotification({
        title: 'Error',
        message: err.message || 'Something went wrong!',
        status: 'error'
      });
    });
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
