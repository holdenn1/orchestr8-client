import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateMainSlice } from './types/mainSliseTypes';

const initialState: InitialStateMainSlice = {
  modalVisible: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.modalVisible = action.payload;
    },
  },
});

export const { setModal } = mainSlice.actions;
export default mainSlice.reducer;
