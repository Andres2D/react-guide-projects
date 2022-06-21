import {useCallback, useState} from 'react';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {url, method, headers, body} = requestConfig;
      const response = await fetch(url,{
        method: method ? method : 'GET',
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null
      });

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);
      applyData(data);

    }catch(err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return {
    sendRequest,
    isLoading,
    error
  }
};

export default useRequest;
