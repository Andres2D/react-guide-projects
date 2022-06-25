import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const Quote = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Quotes page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
