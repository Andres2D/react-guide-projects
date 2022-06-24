import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id:'12a', title: 'Test Item', quantity: 3, total: 18, price: 6 }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      
      if(!newItem) {
        return;
      }

      const newItemIndex = state.items.findIndex((item) => item.id === newItem.id);
      if(newItemIndex !== -1) {
        const existingItem = state.items[newItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          total: existingItem.total + existingItem.price
        };
        state.items[newItemIndex] = updatedItem;
      }else {
        const addItem = {
          ...newItem,
          quantity: 1,
          total: newItem.price
        };
        state.items = [...state.items, addItem];
      }
    },
    removeItem(state, action) {
      const deleteItem = action.payload;
      
      if(!deleteItem) {
        return;
      }

      const newItemIndex = state.items.findIndex((item) => item.id === deleteItem.id);
      
      if(newItemIndex !== -1) {
        const existingItem = state.items[newItemIndex];

        if(existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== deleteItem.id);
        }else{
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
            total: existingItem.total - existingItem.price
          };
          state.items[newItemIndex] = updatedItem;
        }
      }else {
        return;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
