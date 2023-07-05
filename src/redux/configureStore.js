import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';
import uiSlice from './ui/uiSlice';

const store = configureStore({
  reducer: { books: booksReducer, categories: categoryReducer, ui: uiSlice },
});

export default store;
