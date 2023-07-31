import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateMainSlice } from './types/mainSliseTypes';

const initialState: InitialStateMainSlice = {
  selectedOption: {
    sort: 'Choose an option',
    category: 'Choose an option',
  },
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
    sortProjectsBy(state, action: PayloadAction<string>) {
      state.selectedOption.sort = action.payload;
    },
    sortProjectsByCategory(state, action: PayloadAction<string>) {
      state.selectedOption.category = action.payload;
    },
    setIsAddTaskForm(state, action: PayloadAction<boolean>) {
      state.isAddTaskForm = action.payload;
    },
    setShowEditTaskForm(state, action: PayloadAction<boolean>) {
      state.isEditTaskForm = action.payload;
    },
    setShowMembers(state, action: PayloadAction<boolean>) {
      state.isShowMembers = action.payload;
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
  sortProjectsBy,
  sortProjectsByCategory,
  setIsAddTaskForm,
  setShowEditTaskForm,
  setShowMembers,
  setRecomendationMemberVisible,
  setSelectedMembersVisible,
} = mainSlice.actions;
export default mainSlice.reducer;
