import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateMainSlice } from './types/mainSliseTypes';

const initialState: InitialStateMainSlice = {
  modalVisible: false,
  selectedOption: {
    sort: 'Choose an option',
    category: 'Choose an option',
  },
 
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.modalVisible = action.payload;
    },
    sortProjectsBy(state, action: PayloadAction<string>) {
      state.selectedOption.sort = action.payload;
    },
    sortProjectsByCategory(state, action: PayloadAction<string>) {
      state.selectedOption.category = action.payload;
    },
 
  },
});

export const { setModal, sortProjectsBy, sortProjectsByCategory } =
  mainSlice.actions;
export default mainSlice.reducer;
