import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateMainSlice } from './types/mainSliseTypes';

const initialState: InitialStateMainSlice = {
  isMenu: false,
  isAddTaskForm: false,
  isEditTaskForm: false,
  isShowMembers: false,
  recomendationMemberVisible: false,
  selectedMembersVisible: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsMenu(state, action: PayloadAction<boolean>) {
      state.isMenu = action.payload;
    },
    setIsAddTaskForm(state, action: PayloadAction<boolean>) {
      state.isAddTaskForm = action.payload;
      state.isShowMembers = false;
    },
    setShowEditTaskForm(state, action: PayloadAction<boolean>) {
      state.isEditTaskForm = action.payload;
    },
    setShowMembers(state, action: PayloadAction<boolean>) {
      state.isShowMembers = action.payload;
      state.isAddTaskForm = false;
    },
    setSelectedMembersVisible(state, action: PayloadAction<boolean>) {
      state.selectedMembersVisible = action.payload;
    },
    setRecomendationMemberVisible(state, action: PayloadAction<boolean>) {
      state.recomendationMemberVisible = action.payload;
    },
  },
});

export const {
  setIsAddTaskForm,
  setShowEditTaskForm,
  setShowMembers,
  setRecomendationMemberVisible,
  setSelectedMembersVisible,
  setIsMenu,
} = mainSlice.actions;
export default mainSlice.reducer;
