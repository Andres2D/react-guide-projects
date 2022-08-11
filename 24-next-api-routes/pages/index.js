import { useRef, useState } from 'react'

const HomePage = () => {

  const emailInput = useRef();
  const feedbackInput = useRef();
  const [feedback, setFeedback] = useState([]);

  const submitHandler = event => {
    event.preventDefault();
    console.log({
      emailInput: emailInput.current.value,
      feedbackInput: feedbackInput.current.value,
    });

    const email = emailInput.current.value;
    const feedback = feedbackInput.current.value;

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({email, feedback}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch('/api/feedback').then(response => response.json())
    .then((data) =>  setFeedback(data.feedback));
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
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedback.map(item => <li key={item.id}>{item.feedback}</li>)}
      </ul>
    </div>
  )
};

export default HomePage;
