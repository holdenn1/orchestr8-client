import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project, ProjectCountPayload } from './types/projectSliceTypes';

const initialState: InitialStateProjectSlice = {
  ownProjects: [],
  foreignProjects: [],
  projectCount: {} as ProjectCountPayload,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.ownProjects = action.payload;
    },
    setForeignProjects(state, action: PayloadAction<Project[]>) {
      state.foreignProjects = action.payload;
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
      state.projectCount = action.payload;
    },
  },
});

export const { setProjects, updateOwnProject, setOwnProjectsCount,setForeignProjects } = projectSlice.actions;
export default projectSlice.reducer;
