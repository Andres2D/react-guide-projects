import {useCallback, useState} from 'react';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {url} = requestConfig;
      const response = await fetch(url);

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      applyData(data);

    }catch(err) {
      setError(err);
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
