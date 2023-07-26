import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project, ProjectCountPayload } from './types/projectSliceTypes';

const initialState: InitialStateProjectSlice = {
  allProjects: [],
  projectCount: {} as ProjectCountPayload,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.allProjects = action.payload;
    },
    updateProject(state, action: PayloadAction<Project>) {
      state.allProjects = state.allProjects.map((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
        return project;
      });
    },
    setProjectsCount(state, action: PayloadAction<ProjectCountPayload>) {
      state.projectCount = action.payload;
    },
  },
});

export const { setProjects, updateProject, setProjectsCount } = projectSlice.actions;
export default projectSlice.reducer;
