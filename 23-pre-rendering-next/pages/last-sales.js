import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = props => {

  const [sales, setSales] = useState(props.sales);
  const { data, error } = useSWR('https://react-http-22e9d-default-rtdb.firebaseio.com/sales.json',
   (url) => fetch(url).then(res => res.json()));

  useEffect(() => {
    if(data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({id: key, userName: data[key].userName, value: data[key].value});
      }
      setSales(transformedSales);
    }
  }, [data]);

  if(error) {
    return <p>Failed to load.</p>;
  }
  
  if(!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => {
        return <li key={sale.id}>{sale.userName} - ${sale.value}</li>
      })}
    </ul>
  );
};

export const getStaticProps = async() => {
  const response = await fetch('https://react-http-22e9d-default-rtdb.firebaseio.com/sales.json');
  const data = await response.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push(
      { 
        id: key, 
        userName: data[key].userName, 
        value: data[key].value
      }
    );
  }

  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10
  };
};

export default LastSalesPage;
// useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
