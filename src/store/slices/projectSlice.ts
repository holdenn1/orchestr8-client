import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  InitialStateProjectSlice,
  Project,
  ProjectCountPayload,
  UpdateMemberRoleTypes,
} from './types/projectSliceTypes';
import { fetchOwnProjectsAction } from '../actions/projectsActions/fetchOwnProjects';
import { fetchForeignProjectsAction } from '../actions/projectsActions/fetchForeignProjects';

const initialState: InitialStateProjectSlice = {
  ownProjects: [],
  foreignProjects: [],
  ownProjectCount: {} as ProjectCountPayload,
  foreignProjectCount: {} as ProjectCountPayload,
  currentPageOwnProjectList: 1,
  currentPageForeignProjectList: 1,
  isSearching: false,
  isLoading: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addForeignProject(state, action: PayloadAction<Project>) {
      const url = location.href;

      if (url.includes('all-projects') || url.includes('in-progress')) {
        console.log(1);

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
    setIsSearching(state, action: PayloadAction<boolean>) {
      state.isSearching = action.payload;
    },
    updateOwnProject(state, action: PayloadAction<Project>) {
      state.ownProjects = state.ownProjects.map((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
        return project;
      });
    },
    updateRole(state, { payload: { projectId, memberId, role } }: PayloadAction<UpdateMemberRoleTypes>) {
      state.ownProjects = state.ownProjects.map((project) => {
        if (project.id === projectId) {
          project.members.forEach((member) => {
            if (member.id === memberId) {
              member.role = role;
            }
          });
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
        const url = location.href;

        if (url.includes('all-projects') || url.includes('in-progress')) {
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
    builder
      .addCase(fetchOwnProjectsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOwnProjectsAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchOwnProjectsAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchForeignProjectsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchForeignProjectsAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchForeignProjectsAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  setProjects,
  setIsSearching,
  updateOwnProject,
  setOwnProjectsCount,
  setForeignProjects,
  setForeignProjectsCount,
  removeForeignProject,
  addForeignProject,
  updateStatusForeignProject,
  updateForeignProject,
  clearOwnProjectsList,
  updateRole,
  clearForeignProjectsList,
  setCurrentPageOwnProjectList,
  setCurrentPageForeignProjectList,
} = projectSlice.actions;
export default projectSlice.reducer;
