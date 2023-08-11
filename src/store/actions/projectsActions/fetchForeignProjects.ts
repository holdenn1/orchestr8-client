import { getForeignProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCurrentPageForeignProjectList, setForeignProjects } from '@/store/slices/projectSlice';
import { GetForeignProjectResponse } from '../types/projectTypes';
import { RootState } from '@/store';

export const fetchForeignProjectsAction = createAsyncThunk<void, { status: string }>(
  'project/fetchForeignProjectsAction',
  async ({ status }, { dispatch, getState, rejectWithValue }) => {
    try {
      const {
        project: { currentPageForeignProjectList },
      } = getState() as RootState;

      const { data }: GetForeignProjectResponse = await getForeignProjectsRequest(
        status,
        String(currentPageForeignProjectList),
      );

      if (data.length) {
        dispatch(setCurrentPageForeignProjectList(currentPageForeignProjectList + 1));
      }

      if (data) {
        dispatch(setForeignProjects(data));
      }
    } catch (e) {
      console.error(e);
      rejectWithValue(false);
    }
  },
);
