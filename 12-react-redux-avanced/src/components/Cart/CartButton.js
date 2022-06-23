import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(cartActions.toogleCart())
  };

  return (
    <button 
      className={classes.button}
      onClick={buttonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
