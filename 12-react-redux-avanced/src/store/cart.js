import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false
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
