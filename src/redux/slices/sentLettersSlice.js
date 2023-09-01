import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  letters: [],
  isSent: false,
};

const sentLettersSlice = createSlice({
  name: 'sentLetters',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.letters = [...state.letters, action.payload];
    },
    toggleStatusSent: (state) => {
      state.isSent = !state.isSent;
    },
  },
});

export const { addMessage, toggleStatusSent } = sentLettersSlice.actions;

export const selectSentLetters = (state) => state.sentLetters;

export default sentLettersSlice.reducer;
