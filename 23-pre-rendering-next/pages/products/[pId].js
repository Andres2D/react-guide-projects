import path from 'path';
import fs from 'fs/promises';

const ProductDetailPage = props => {

  const { loadedProduct } = props;

  if(!loadedProduct) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Title: {loadedProduct.title}</h1>
      <p>Description: {loadedProduct.description}</p>
    </>
  )
}

const getData = async() => {
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  return data;
};

export const getStaticProps = async(context) => {
  // getting query param from server
  const { params } = context;
  const productId = params.pId;
  const data = await getData();
  const product = data.products.find(p => p.id === productId);

  if(!product) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      loadedProduct: product
    }
  };
};

export const getStaticPaths = async() => {
  const data = await getData();
  const ids = data.products.map(p => p.id);
  const params = ids.map(id => ({params: {pId: id}}));

  return {
    paths: params,
    fallback: true // false or 'blocking' to avoid the avoid fallback in the component
  };
};

export default ProductDetailPage;
