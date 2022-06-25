import { useParams } from 'react-router-dom';

const Quote = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Quotes page</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default Quote;
