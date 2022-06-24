import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  notification: null,
};

const cartSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toogleCart(state) {
      state.showCart = !state.showCart; 
    },
    showNotification(state, action) {
      const {status, title, message} = action.payload;
      state.notification = {
        status,
        title,
        message 
      };
    }
  }
});

export const uiActions = cartSlice.actions; 

export default cartSlice.reducer;
