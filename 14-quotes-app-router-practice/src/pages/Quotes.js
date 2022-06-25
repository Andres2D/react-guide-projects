import QuoteList from '../components/quotes/QuoteList';

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

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default Quotes;
