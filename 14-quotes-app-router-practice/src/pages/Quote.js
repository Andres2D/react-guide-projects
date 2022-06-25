import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoaderSpinner from '../components/UI/LoadingSpinner';

const Quote = () => {
  const params = useParams();
  const match = useRouteMatch();
  const commentsPath = `${match.url}/comments`;
  const {quoteId} = params;
  const {sendRequest, status, data: loadedData, error} = useHttp(getSingleQuote, true);  

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status === 'pending') {
    return (
      <div className='centered'>
        <LoaderSpinner />
      </div>
    )
  }

  if(error) {
    return <p>No quote found!</p>;
  }

  if(!loadedData.text) {
    return (
      <p>No quote found!</p>
    );
  }

  return (
    <>
      <HighLightedQuote text={loadedData.text} author={loadedData.author} />
      <Route path={match.url} exact>
        <div className='centered'>
          <Link className='btn--flat' to={commentsPath}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={commentsPath}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
