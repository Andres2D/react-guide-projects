import { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandle = id => {

  }

  const cartItemAddHandle = item => {

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

  return (
    <Modal onClick={props.onToggleModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onToggleModal}  className={styles['button--alt']}>Close</button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;
