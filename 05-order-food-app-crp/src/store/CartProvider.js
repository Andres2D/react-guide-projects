import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIdex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIdex];
    let updatedItems;

    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIdex] = updatedItem;
    }else {
      state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    };
  }else {

  }
  return defaultCartState;
};

const CartProvider = props => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer,  defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item});
  };
  
  const removeItemToCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return (
    <CartContext.Provider
      value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
