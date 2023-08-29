import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUpload: false,
  files: [],
};

export const uploadFilesSlice = createSlice({
  name: 'uploadFiles',
  initialState,
  reducers: {
    addFiles: (state, action) => {
      state.files = [...state.files, ...action.payload];
    },
    removeFile: (state, action) => {
      state.files = state.files.filter((file) => file.name !== action.payload);
    },

    toggleIsUpload: (state) => {
      state.isUpload = !state.isUpload;
    },
  },
});

export const { addFiles, removeFile, toggleIsUpload } =
  uploadFilesSlice.actions;

export const selectUploadFiles = (state) => state.uploadFiles;

export default uploadFilesSlice.reducer;
