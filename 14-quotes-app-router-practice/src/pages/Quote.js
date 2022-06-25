import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Max',
    text: 'Learning React is Fun!'
  },
  {
    id: 'q2',
    author: 'Maximilian',
    text: 'Learning React is Great!'
  }
];

const Quote = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(q => q.id === params.quoteId);

  if(!quote) {
    return (
      <p>No quote found!</p>
    );
  }

  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
