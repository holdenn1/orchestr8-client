import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project, ProjectCountPayload } from './types/projectSliceTypes';

const initialState: InitialStateProjectSlice = {
  ownProjects: [],
  foreignProjects: [],
  ownProjectCount: {} as ProjectCountPayload,
  foreignProjectCount: {} as ProjectCountPayload
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.ownProjects = action.payload;
    },
    updateOwnProject(state, action: PayloadAction<Project>) {
      state.ownProjects = state.ownProjects.map((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
        return project;
      });
    },
    setOwnProjectsCount(state, action: PayloadAction<ProjectCountPayload>) {
      state.ownProjectCount = action.payload;
    },
    setForeignProjects(state, action: PayloadAction<Project[]>) {
      state.foreignProjects = action.payload;
    },
    setForeignProjectsCount(state, action: PayloadAction<ProjectCountPayload>) {
      state.foreignProjectCount = action.payload;
    },
  },
});

export const {
  setProjects,
  updateOwnProject,
  setOwnProjectsCount,
  setForeignProjects,
  setForeignProjectsCount,
} = projectSlice.actions;
export default projectSlice.reducer;
