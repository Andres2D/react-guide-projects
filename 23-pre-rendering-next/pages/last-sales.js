import { useEffect, useState } from 'react';

const LastSalesPage = () => {

  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-http-22e9d-default-rtdb.firebaseio.com/sales.json')
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({id: key, userName: data[key].userName, value: data[key].value});
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if(isLoading) {
    return <p>Loading...</p>;
  }
  
  if(!sales) {
    return <p>No data yet!</p>
  }

  return (
    <ul>
      {sales.map((sale) => {
        return <li key={sale.id}>{sale.userName} - ${sale.value}</li>
      })}
    </ul>
  );
};

export default LastSalesPage;
