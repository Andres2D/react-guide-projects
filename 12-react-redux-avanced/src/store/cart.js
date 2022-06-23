import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [
    { id:'12a', title: 'Test Item', quantity: 3, total: 18, price: 6 }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toogleCart(state) {
      state.showCart = !state.showCart; 
    }
  }
});

export const cartActions = cartSlice.actions;


export default cartSlice.reducer;
