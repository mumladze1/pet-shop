
import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './features/animalsSlice';
import categoriesReducer from './features/categoriesSlice';

const store = configureStore({
  reducer: {
    animals: animalsReducer,
    categories: categoriesReducer,
  },
});

export default store;
