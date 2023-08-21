import { getForeignProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetForeignProjectResponse } from '../types/projectTypes';
import { RootState } from '@/store';
import { setCurrentPageProjectList, setProjects } from '@/store/slices/projectSlice';

export const fetchForeignProjectsAction = createAsyncThunk<void, { status: string }>(
  'project/fetchForeignProjectsAction',
  async ({ status }, { dispatch, getState, rejectWithValue }) => {
    try {
      const {
        project: { currentPageProjectList, isSearching },
      } = getState() as RootState;

      if (!isSearching) {
        const { data }: GetForeignProjectResponse = await getForeignProjectsRequest({
          currentPage: String(currentPageProjectList),
          status,
        });

        if (data.length) {
          dispatch(setCurrentPageProjectList(currentPageProjectList + 1));
        }

        if (data) {
          dispatch(setProjects(data));
        }
      }
    } catch (e) {
      console.error(e);
      rejectWithValue(false);
    }
  },
);
