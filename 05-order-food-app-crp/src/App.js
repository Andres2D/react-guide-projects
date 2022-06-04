import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {

  const [cartModal, setCartModal] = useState(false);

  const toggleCartModal = () => {
    setCartModal((prevVal) => !prevVal);
  }

  return (
    <CartProvider>
      {cartModal && <Cart onToggleModal={toggleCartModal} />}
      <Header onToggleModal={toggleCartModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
