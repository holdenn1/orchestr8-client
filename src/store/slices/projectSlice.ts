import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project, ProjectCountPayload } from './types/projectSliceTypes';

const initialState: InitialStateProjectSlice = {
  ownProjects: [],
  foreignProjects: [],
  ownProjectCount: {} as ProjectCountPayload,
  foreignProjectCount: {} as ProjectCountPayload,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addForeignProject(state, action: PayloadAction<Project>) {
      state.foreignProjects.push(action.payload);
    },
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
    updateStatusForeignProject(state, action: PayloadAction<Project>) {
      const url = location.href;
      if (state.foreignProjects.some((proj) => proj.id === action.payload.id)) {
        if (!url.includes('all-projects') && !url.includes('tasks')) {
          state.foreignProjects = state.foreignProjects.filter(
            (proj) => proj.id !== action.payload.id && proj.status !== action.payload.status,
          );
        }
      } else {
        state.foreignProjects.unshift(action.payload);
      }
    },
    updateForeignProject(state, action: PayloadAction<Project>) {
      if (state.foreignProjects.some((proj) => proj.id === action.payload.id)) {
        state.foreignProjects = state.foreignProjects.map((project) => {
          if (project.id === action.payload.id) {
            project = action.payload;
          }
          return project;
        });
      } else {
        state.foreignProjects.unshift(action.payload);
      }
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
    removeForeignProject(state, action: PayloadAction<Project>) {
      state.foreignProjects = state.foreignProjects.filter((project) => project.id !== action.payload.id);
    },
  },
});

export const {
  setProjects,
  updateOwnProject,
  setOwnProjectsCount,
  setForeignProjects,
  setForeignProjectsCount,
  removeForeignProject,
  addForeignProject,
  updateStatusForeignProject,
  updateForeignProject,
} = projectSlice.actions;
export default projectSlice.reducer;
