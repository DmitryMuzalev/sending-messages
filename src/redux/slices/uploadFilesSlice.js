import { createSlice } from '@reduxjs/toolkit';
import { validationFileSize } from '../../validation';

const initialState = {
  isUpload: false,
  files: [],
};

export const uploadFilesSlice = createSlice({
  name: 'uploadFiles',
  initialState,
  reducers: {
    addFiles: (state, action) => {
      const data = [...action.payload].filter((file) =>
        validationFileSize(file.name, file.size)
      );

      state.files = [...state.files, ...data];
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
