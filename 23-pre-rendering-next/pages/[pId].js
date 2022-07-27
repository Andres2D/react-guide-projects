import path from 'path';
import fs from 'fs/promises';

const ProductDetailPage = props => {

  const { loadedProduct } = props;

  return (
    <>
      <h1>Title: {loadedProduct.title}</h1>
      <p>Description: {loadedProduct.description}</p>
    </>
  )
}

export const getStaticProps = async(context) => {
  // getting query param from server
  const { params } = context;
  const productId = params.pId;

  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const product = data.products.find(p => p.id === productId);
  return {
    props: {
      loadedProduct: product
    }
  };
};

export const getStaticPaths = async() => {
  return {
    paths: [
      {
        params: {
          pId: 'p1'
        }
      },
      {
        params: {
          pId: 'p2'
        }
      },
      {
        params: {
          pId: 'p3'
        }
      }
    ],
    fallback: false
  };
};

export default ProductDetailPage;
