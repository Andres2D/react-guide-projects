import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

const HomePage = props => {

  const {products} = props;

  return (
    <ul>  
      {products.map(product => <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>)}
    </ul>
  )
}

// Server side code
export const getStaticProps = async () => {
  console.log('Regenerating ...');
  // process.cwd() --> get current working directory
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  if(!data) {
    return {
      redirect: {
        destination: '/no-data' // Redirecting to another page in case of API fails
      }
    }
  }

  if(data.products.length === 0) {
    return {
      notFound: true // Returning a complete 404 page if there is any problem
    };
  }

  return { 
    props: {
      products: data.products
    },
    revalidate: 10, // every seconds to regenerate the page again
  };
}

export default HomePage;
