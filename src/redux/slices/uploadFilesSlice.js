import { createSlice } from '@reduxjs/toolkit';
import { validationUploadedFiles } from '../../validation';

const initialState = {
  isUpload: false,
  files: [],
  validFormats: [
    '.png',
    '.jpg',
    '.jpeg',
    '.doc',
    '.docx',
    '.xls',
    '.xlsx',
    '.pdf',
    '.zip',
    '.rar',
    '.7zip',
  ],
  maxSizeInBytes: 1048576 * 5,
};

export const uploadFilesSlice = createSlice({
  name: 'uploadFiles',
  initialState,
  reducers: {
    addFiles: (state, action) => {
      const { maxSizeInBytes, validFormats } = state;
      const data = [...action.payload].filter((file) =>
        validationUploadedFiles(file, validFormats, maxSizeInBytes)
      );
      state.files = [...state.files, ...data];
    },
    removeFiles: (state) => {
      state.files = [];
    },
    deleteFile: (state, action) => {
      state.files = state.files.filter((file) => file.name !== action.payload);
    },

    toggleIsUpload: (state) => {
      state.isUpload = !state.isUpload;
    },
  },
});

export const { addFiles, deleteFile, removeFiles, toggleIsUpload } =
  uploadFilesSlice.actions;

export const selectUploadFiles = (state) => state.uploadFiles;

export default uploadFilesSlice.reducer;
