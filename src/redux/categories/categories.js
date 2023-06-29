import { createReducer, createAction } from '@reduxjs/toolkit';

export const UPDATE_CATEGORY_STATUS = createAction('categories/UPDATE_CATEGORY_STATUS');

const initialState = {
  status: '',
};

const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(UPDATE_CATEGORY_STATUS, (state) => {
    const nwState = { ...state, status: 'Under Constraction' };

    return nwState;
  });
  builder.addDefaultCase((state) => state);
});

export default categoryReducer;
