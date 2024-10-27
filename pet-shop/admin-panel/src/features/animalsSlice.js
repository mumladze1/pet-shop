
import { createSlice } from '@reduxjs/toolkit';

const animalsSlice = createSlice({
  name: 'animals',
  initialState: [],
  reducers: {
    addAnimal: (state, action) => { state.push(action.payload); },
    updateAnimal: (state, action) => {
      const index = state.findIndex((animal) => animal.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    removeAnimal: (state, action) => {
      return state.filter((animal) => animal.id !== action.payload);
    },
  },
});

export const { addAnimal, updateAnimal, removeAnimal } = animalsSlice.actions;
export default animalsSlice.reducer;
