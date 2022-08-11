import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = props => {

  const [feedback, setFeedback] = useState();

  const detailsHandler = (id) => {
    fetch(`/api/${id}`).then(res => res.json()).then(data => {
      setFeedback(data.feedback);
    });
  };

  return (
    <>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {props.feedback.map(item => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={detailsHandler.bind(null, item.id)}>Show details</button>
          </li>)
        )}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  const path = buildFeedbackPath();
  const data = extractFeedback(path);

  return {
    props: {
      feedback: data
    }
  };
};

export default FeedbackPage;
