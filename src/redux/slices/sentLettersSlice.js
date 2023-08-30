import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  letters: [],
};

const sentLettersSlice = createSlice({
  name: 'sentLetters',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.letters = [...state.letters, action.payload];
    },
  },
});

export const { addMessage } = sentLettersSlice.actions;

export const selectSentLetters = (state) => state.sentLetters;

export default sentLettersSlice.reducer;
