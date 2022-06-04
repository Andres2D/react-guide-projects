import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext);

  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {cartCtx.items.length}
      </span>
    </button>
  )
}

export default HeaderCardButton;
