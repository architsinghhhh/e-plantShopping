// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default store;