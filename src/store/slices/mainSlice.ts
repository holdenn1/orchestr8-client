import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateMainSlice } from './types/mainSliseTypes';

const initialState: InitialStateMainSlice = {
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
 
  setIsAddTaskForm,
  setShowEditTaskForm,
  setShowMembers,
  setRecomendationMemberVisible,
  setSelectedMembersVisible,
} = mainSlice.actions;
export default mainSlice.reducer;
