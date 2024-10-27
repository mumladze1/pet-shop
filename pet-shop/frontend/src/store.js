
import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './features/animalsSlice';
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishlistSlice';

const store = configureStore({
  reducer: {
    animals: animalsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
