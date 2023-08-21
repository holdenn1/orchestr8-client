import {
  InitialStateProjectSlice,
  Project,
  ProjectCountPayload,
  UpdateMemberRoleTypes,
} from './types/projectSliceTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchOwnProjectsAction } from '../actions/projectsActions/fetchOwnProjects';
import { fetchForeignProjectsAction } from '../actions/projectsActions/fetchForeignProjects';

const initialState: InitialStateProjectSlice = {
  projects: [],
  ownProjectCount: null,
  foreignProjectCount: null,
  currentPageProjectList: 1,
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
        state.projects.push(action.payload);
      }
    },
    setProjects(state, action: PayloadAction<Project[]>) {
      const oldProjectIds = state.projects.map((proj) => proj.id);
      const newProjects = action.payload.filter((proj) => !oldProjectIds.includes(proj.id));
      state.projects = [...state.projects, ...newProjects];
    },
    clearProjectsList(state) {
      state.projects = [];
    },
    setIsSearching(state, action: PayloadAction<boolean>) {
      state.isSearching = action.payload;
    },
    updateOwnProject(state, action: PayloadAction<Project>) {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
        return project;
      });
    },
    updateForeignProject(state, action: PayloadAction<Project>) {
      if (state.projects.some((proj) => proj.id === action.payload.id)) {
        state.projects = state.projects.map((project) => {
          if (project.id === action.payload.id) {
            project = action.payload;
          }
          return project;
        });
      } else {
        const url = location.href;
        if (url.includes('all-projects') || url.includes('in-progress')) {
          state.projects.unshift(action.payload);
        }
      }
    },
    updateStatusProject(state, action: PayloadAction<Project>) {
      const url = location.href;
      if (state.projects.some((proj) => proj.id === action.payload.id)) {
        if (!url.includes('all-projects') && !url.includes('tasks')) {
          state.projects = state.projects.filter(
            (proj) => proj.id !== action.payload.id && proj.status !== action.payload.status,
          );
        }
      } else {
        if (state.projects.every((proj) => proj.status === action.payload.status)) {
          state.projects.unshift(action.payload);
        }
      }
    },
    updateMemberToProjectRole(
      state,
      { payload: { projectId, memberId, memberRole } }: PayloadAction<UpdateMemberRoleTypes>,
    ) {
      state.projects = state.projects.map((project) => {
        if (project.id === projectId) {
          project.members.forEach((member) => {
            if (member.id === memberId) {
              member.role = memberRole;
            }
          });
        }
        return project;
      });
    },
    setOwnProjectsCount(state, action: PayloadAction<ProjectCountPayload | null>) {
      state.ownProjectCount = action.payload;
    },
    setForeignProjectsCount(state, action: PayloadAction<ProjectCountPayload | null>) {
      state.foreignProjectCount = action.payload;
    },
    removeForeignProject(state, action: PayloadAction<Project>) {
      state.projects = state.projects.filter((project) => project.id !== action.payload.id);
    },
    setCurrentPageProjectList(state, action: PayloadAction<number>) {
      state.currentPageProjectList = action.payload;
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
  setForeignProjectsCount,
  removeForeignProject,
  addForeignProject,
  updateForeignProject,
  clearProjectsList,
  setCurrentPageProjectList,
  updateMemberToProjectRole,
  updateStatusProject,
} = projectSlice.actions;
export default projectSlice.reducer;
