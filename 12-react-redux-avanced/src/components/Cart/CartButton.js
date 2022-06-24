import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const items = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(uiActions.toogleCart())
  };

  return (
    <button 
      className={classes.button}
      onClick={buttonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
