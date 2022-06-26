import { Route, Routes, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <Switch> --> react-route-dom --> v5 */ }
        <Routes> 
          <Route path='/' exact>
            {/* <Redirect to='/welcome' /> */}
          </Route>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default App;
