import { useRef } from 'react'

const HomePage = () => {

  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const email = emailInput.current.value;
    const feedback = feedbackInput.current.value;
    console.log({
      emailInput: emailInput.current.value,
      feedbackInput: feedbackInput.current.value,
    });
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input ref={emailInput} type='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea ref={feedbackInput} id='feedback' rows='5'></textarea>
        </div>
        <button type='submit'>Send feedback</button>
      </form>
    </div>
  )
};

export default HomePage;
