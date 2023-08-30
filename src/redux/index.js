import { configureStore } from '@reduxjs/toolkit';
import uploadFilesReducer from './slices/uploadFilesSlice';
import sentLettersReducer from './slices/sentLettersSlice';

export const store = configureStore({
  reducer: {
    uploadFiles: uploadFilesReducer,
    sentLetters: sentLettersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
