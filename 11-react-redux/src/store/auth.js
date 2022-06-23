import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
  isAutheticated: false
}

const authSlice = createSlice({
name: 'authentication',
  initialState: initialAuthSlice,
  reducers: {
    login(state) {
      state.isAutheticated = true
    },
    logout(state) {
      state.isAutheticated = false
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
