import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true
};

const initialAuthSlice = {
  isAutheticated: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

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

const store = configureStore( {
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }   
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
