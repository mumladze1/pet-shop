
import { createSlice } from '@reduxjs/toolkit';

const animalsSlice = createSlice({
  name: 'animals',
  initialState: [
    { id: 1, name: 'Hamster', price: 20, isPopular: true, stock: 5 },
    { id: 2, name: 'Parrot', price: 35, isPopular: false, stock: 3 },
  
  ],
  reducers: {},
});

export default animalsSlice.reducer;
