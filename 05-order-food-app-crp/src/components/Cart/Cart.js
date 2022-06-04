import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = props => {

  const cartItems = 
  (
    <ul className={styles['cart-items']}>
      {[{id: 'C1', name: 'Sushi', ammount: 2, price: 12.99}].map(item => {
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onToggleModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onToggleModal}  className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;
