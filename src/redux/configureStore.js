import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';
import uiSlice from './ui/uiSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Set up reducers for different slices of the state
    books: booksReducer, // Reducer for books slice
    categories: categoryReducer, // Reducer for categories slice
    ui: uiSlice, // Reducer for UI slice
  },
});

export default store;
