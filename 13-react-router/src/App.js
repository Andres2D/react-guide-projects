import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route 
            path='/welcome'>
              <Welcome />
          </Route>
          <Route 
            path='/products' exact>
              <Products />
          </Route>
          <Route
            path='/products/:productId'>
              <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;