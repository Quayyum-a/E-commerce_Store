import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../api/productApi";
import cartReducer from "../api/cartSlice";
import wishlistReducer from "../api/wishlistSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
