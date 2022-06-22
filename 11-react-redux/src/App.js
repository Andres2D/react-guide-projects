import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';

function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAutheticated);

  return (
    <>
      <Header />
      { !isAuthenticated && <Auth /> }
      <Counter />
    </>
  );
}

export default App;
