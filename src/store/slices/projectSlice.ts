import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project } from './types/projectSliceTypes';

const initialState: InitialStateProjectSlice = {
  inProgressProjects: [],
  completedProjects: [],
  suspendProjects: [],
  allProjects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProgressProjects(state, action: PayloadAction<Project[]>) {      
      state.inProgressProjects = action.payload;
    },
    setCompletedProjects(state, action: PayloadAction<Project[]>) {
      state.completedProjects = action.payload;
    },
    setSuspendProjects(state, action: PayloadAction<Project[]>) {
      state.suspendProjects = action.payload;
    },
    setAllProjects(state, action: PayloadAction<Project[]>) {
      state.allProjects = action.payload;
    },
  },
});

export const { setProgressProjects, setCompletedProjects, setSuspendProjects, setAllProjects } =
  projectSlice.actions;
export default projectSlice.reducer;
