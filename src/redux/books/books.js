import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { uiActions } from '../ui/uiSlice';

// Set the base URL for axios requests
axios.defaults.baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AL3jlDWauW8xqK5fxtQG/books';

// Async thunk to fetch books
export const fetchBooks = createAsyncThunk(
  'book/fetch_books',
  async (arg, thunkAPI) => {
    try {
      thunkAPI.dispatch(uiActions.pendingModal());

      // Make a GET request to fetch books
      const response = await axios.get();

      if (response.status !== 200) {
        throw Error('Something went wrong!');
      }

      const data = { ...response.data };

      if (!data) {
        throw Error('Data not found!');
      }

      const booksArr = [];

      Object.keys(data).forEach((key) => {
        booksArr.push({
          id: key,
          title: data[key][0].title,
          author: data[key][0].author,
          category: data[key][0].category,
        });
      });

      thunkAPI.dispatch(uiActions.closeModal());

      // Return the fetched books array
      return booksArr || [];
    } catch (err) {
      thunkAPI.dispatch(
        uiActions.rejectModal(err.message || 'Failed to fetch books!'),
      );
    }

    // Return null if there was an error
    return null;
  },
);

// Async thunk to add a new book
export const postANewBook = createAsyncThunk(
  'books/add',
  async (book, thunkAPI) => {
    try {
      const bookData = {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      };

      thunkAPI.dispatch(uiActions.pendingModal());

      // Make a POST request to add a new book
      const response = await axios.post('', { ...bookData });

      if (response.status === 201) {
        thunkAPI.dispatch(
          uiActions.successModal('Book successfully added!'),
        );

        // Return the added book data
        return bookData;
      }
    } catch (err) {
      thunkAPI.dispatch(
        uiActions.rejectModal(err.message || 'Failed to add the book!'),
      );
    }

    // Return null if there was an error
    return null;
  },
);

// Async thunk to remove a book
export const removeBook = createAsyncThunk(
  'book/remove',
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(uiActions.pendingModal());

      // Make a DELETE request to remove a book by its ID
      const response = await axios.delete(`/${id}`);

      if (response.status !== 201) {
        throw Error('Failed to delete the book!');
      }

      thunkAPI.dispatch(uiActions.successModal(response.data));

      // Return the ID of the removed book
      return id;
    } catch (err) {
      thunkAPI.dispatch(
        uiActions.rejectModal(err.message || 'Failed to delete the book!'),
      );
    }

    // Return null if there was an error
    return null;
  },
);

const initialState = {
  books: [],
};

// Reducer
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    const updatedState = {
      ...state,
      books: [...action.payload],
    };
    return updatedState;
  });

  builder.addCase(removeBook.fulfilled, (state, action) => {
    const updatedBooks = [...state.books].filter(
      (book) => book.id !== action.payload,
    );
    return { ...state, books: updatedBooks };
  });

  builder.addCase(postANewBook.fulfilled, (state, { payload }) => {
    const book = {
      id: payload.item_id,
      title: payload.title,
      author: payload.author,
      category: payload.category,
    };
    const updatedState = { ...state, books: [...state.books, { ...book }] };
    return updatedState;
  });

  // Handle other action cases (if any)
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
