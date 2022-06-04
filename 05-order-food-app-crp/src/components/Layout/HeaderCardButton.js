import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCardButton;