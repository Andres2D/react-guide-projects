import path from 'path';
import fs from 'fs/promises';

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

  // process.cwd() --> get current working directory
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return { 
    props: {
      products: data.products
    } 
  };
}

export default HomePage;
