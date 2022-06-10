import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    const timer = setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
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
