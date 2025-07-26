import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: storedCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
