import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import useRequest from '../../hooks/use-request';

const Cart = props => {

  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { sendRequest: postOrder, isLoading: isSubmitting } = useRequest()

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

  const submitOrderHandler = async(userData) => {
    postOrder({
      url: 'https://react-http-22e9d-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      })
    }, () => setDidSubmit(true));
    cartCtx.clearCart();
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

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      { isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onToggleModal} /> }
      { !isCheckout && modalActions }
    </>
  );

  const isSubmittinModalContent = (
      <p>Sending order data...</p>
  );

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button onClick={props.onToggleModal}  className={styles['button--alt']}>Close</button>
      </div>
    </>
  );

  return (
    <Modal onClick={props.onToggleModal}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittinModalContent}
      {didSubmit && didSubmit && didSubmitModalContent}
    </Modal>
  )
};

export default Cart;
