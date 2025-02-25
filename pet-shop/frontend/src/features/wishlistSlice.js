
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.some((animal) => animal.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => state.filter((animal) => animal.id !== action.payload),
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
