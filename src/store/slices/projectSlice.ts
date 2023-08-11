import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project, ProjectCountPayload } from './types/projectSliceTypes';
import { fetchOwnProjectsAction } from '../actions/projectsActions/fetchOwnProjects';
import { fetchForeignProjectsAction } from '../actions/projectsActions/fetchForeignProjects';

const initialState: InitialStateProjectSlice = {
  ownProjects: [],
  foreignProjects: [],
  ownProjectCount: {} as ProjectCountPayload,
  foreignProjectCount: {} as ProjectCountPayload,
  isLoading: false,
  currentPageOwnProjectList: 1,
  currentPageForeignProjectList: 1,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addForeignProject(state, action: PayloadAction<Project>) {
      const url = location.href;
      
      if (url.includes('all-projects') || url.includes('in-progress')) {
        console.log(2);
        
        state.foreignProjects.push(action.payload);
      }
    },
    setProjects(state, action: PayloadAction<Project[]>) {
      state.ownProjects = [...state.ownProjects, ...action.payload];
    },
    clearOwnProjectsList(state) {
      state.ownProjects = [];
    },
    clearForeignProjectsList(state) {
      state.foreignProjects = [];
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
        if (state.foreignProjects.every((proj) => proj.status === action.payload.status)) {
          state.foreignProjects.unshift(action.payload);
        }
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
        if (state.foreignProjects.every((proj) => proj.status === action.payload.status)) {
          state.foreignProjects.unshift(action.payload);
        }
      }
    },
    setOwnProjectsCount(state, action: PayloadAction<ProjectCountPayload>) {
      state.ownProjectCount = action.payload;
    },
    setForeignProjects(state, action: PayloadAction<Project[]>) {
      state.foreignProjects = [...state.foreignProjects, ...action.payload];
    },
    setForeignProjectsCount(state, action: PayloadAction<ProjectCountPayload>) {
      state.foreignProjectCount = action.payload;
    },
    removeForeignProject(state, action: PayloadAction<Project>) {
      state.foreignProjects = state.foreignProjects.filter((project) => project.id !== action.payload.id);
    },
    setCurrentPageOwnProjectList(state, action: PayloadAction<number>) {
      state.currentPageOwnProjectList = action.payload;
    },
    setCurrentPageForeignProjectList(state, action: PayloadAction<number>) {
      state.currentPageForeignProjectList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwnProjectsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOwnProjectsAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchOwnProjectsAction.rejected, (state, action) => {
      state.isLoading = action.payload as boolean;
    });
    builder.addCase(fetchForeignProjectsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchForeignProjectsAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchForeignProjectsAction.rejected, (state, action) => {
      state.isLoading = action.payload as boolean;
    });
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
  clearOwnProjectsList,
  clearForeignProjectsList,
  setCurrentPageOwnProjectList,
  setCurrentPageForeignProjectList,
} = projectSlice.actions;
export default projectSlice.reducer;
