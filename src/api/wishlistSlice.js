import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      
      if (!existingItem) {
        state.wishlistItems.push({
          ...action.payload,
          addedAt: new Date().toISOString(),
        });
        localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      }
    },
    
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
    
    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem("wishlist");
    },
    
    moveToCart: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { 
  addToWishlist, 
  removeFromWishlist, 
  clearWishlist,
  moveToCart 
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
