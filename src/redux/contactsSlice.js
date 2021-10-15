import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  query: '',
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    getContactsSuccess: (state, action) => {
      state.items = action.payload;
    },
    getContactsFailure: (state, action) => {
      state.error = action.payload.error;
    },
    addContactSuccess: (state, action) => {
      if (state.items.some(c => c.name === action.payload.name)) {
        state.error = 'This contact is already exists in contacts';
      } else {
        state.items.push(action.payload);
      }
    },
    addContactFailure: (state, action) => {
      state.error = action.payload.error;
    },
    deleteContactSuccess: (state, action) => {
      state.items = state.items.filter(c => {
        return c.id !== action.payload;
      });
    },
    updateQuery: (state, action) => {
      state.query = action.payload.toLowerCase();
    },
  },
});

export const {
  getContactsSuccess,
  getContactsFailure,
  addContactSuccess,
  addContactFailure,
  deleteContactSuccess,
  updateQuery,
} = contactsSlice.actions;

export default contactsSlice.reducer;
