const HomePage = props => {

  const {products} = props;

  return (
    <ul>  
      {products.map(product => <li key={product.id}>{product.title}</li>)}
    </ul>
  )
}

// Server side code
export const getStaticProps = async () => {
  return { 
    props: {
      products: [{id: 'p1', title: 'Product 1'}]
    } 
  };
}

export default HomePage;
