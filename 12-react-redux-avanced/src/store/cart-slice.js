import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      console.log(newItem);
      
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
      const deleteItem = action.payload;
      
      if(!deleteItem) {
        return;
      }
      
      const existingItem = state.items.find((item) => item.id === deleteItem.id);
      state.totalQuantity--;

      if(existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== deleteItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
