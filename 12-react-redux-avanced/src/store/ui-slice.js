import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false
};

const cartSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toogleCart(state) {
      state.showCart = !state.showCart; 
    },
  }
});

export const uiActions = cartSlice.actions; 

export default cartSlice.reducer;
