import { configureStore } from '@reduxjs/toolkit';
import uploadFilesReducer from './slices/uploadFilesSlice';

export const store = configureStore({
  reducer: {
    uploadFiles: uploadFilesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
