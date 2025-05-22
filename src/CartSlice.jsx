import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: [],
    },
    reducers: {
      addToCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.cartItems.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...item, quantity: 1 });
        }
      },
      // You can add more reducers like removeFromCart, clearCart, etc.
    },
  });

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
