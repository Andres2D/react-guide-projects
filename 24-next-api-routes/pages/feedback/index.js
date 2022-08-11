import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = props => {
  return (
    <ul>
      {props.feedback.map(item => <li key={item.id}>{item.feedback}</li>)}
    </ul>
  )
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
