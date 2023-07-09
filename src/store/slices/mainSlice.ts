import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateMainSlice } from './types/mainSliseTypes';

const initialState: InitialStateMainSlice = {
  modalVisible: false,
  selectedOption: {
    sort: 'Choose an option',
    category: 'Choose an option',
  },
  projectMenu: {
    complete: false,
    suspend: false,
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
    setComplete(state) {
      state.projectMenu.complete = !state.projectMenu.complete;
      state.projectMenu.suspend = false;
    },
    setSuspend(state) {
      state.projectMenu.complete = false;
      state.projectMenu.suspend = !state.projectMenu.suspend;
    },
  },
});

export const { setModal, sortProjectsBy, sortProjectsByCategory, setComplete, setSuspend } =
  mainSlice.actions;
export default mainSlice.reducer;
