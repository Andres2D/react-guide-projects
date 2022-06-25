import { Route, Switch, Redirect } from 'react-router-dom';
import Quote from './pages/Quote';
import Quotes from './pages/Quotes';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <Quotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <Quote />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
