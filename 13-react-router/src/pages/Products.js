import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to='/products/book'>
            A Book
          </Link>
        </li>
        <li>
          <Link to='/products/carpet'>
            A Carpet
          </Link>
        </li>
        <li>
          <Link to='/products/course'>
            An online course
          </Link>
        </li>
      </ul>
    </section>
  )
};

export default Products;
