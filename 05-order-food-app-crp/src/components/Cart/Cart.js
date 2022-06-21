import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {

  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandle = id => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandle = item => {
    cartCtx.addItem({...item, amount: 1});
  }

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const cartItems = 
  (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map(item => {
        return (
          <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandle.bind(null, item.id)}
            onAdd={cartItemAddHandle.bind(null, item)}
          />
        )
      })}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button onClick={props.onToggleModal}  className={styles['button--alt']}>Close</button>
      {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
    </div>
  );

  return (
    <Modal onClick={props.onToggleModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      { isCheckout && <Checkout onCancel={props.onToggleModal} /> }
      { !isCheckout && modalActions }
    </Modal>
  )
};

export default Cart;
