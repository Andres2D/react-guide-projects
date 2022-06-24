import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      const {totalQuantity, items} = action.payload;
      state.totalQuantity = totalQuantity;
      state.items = items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      
      if(!newItem) {
        return;
      }

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if(existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      }
    },
    removeItem(state, action) {
      const idItem = action.payload;
      
      if(!idItem) {
        return;
      }
      
      const existingItem = state.items.find((item) => item.id === idItem);
      state.totalQuantity--;

      if(existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== idItem);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
