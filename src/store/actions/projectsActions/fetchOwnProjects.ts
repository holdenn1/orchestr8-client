import { getOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCurrentPageProjectList, setProjects } from '@/store/slices/projectSlice';
import { GetOwnProjectResponse } from '../types/projectTypes';
import { RootState } from '@/store';

export const fetchOwnProjectsAction = createAsyncThunk<void, { status: string }>(
  'project/fetchOwnProjectsAction',
  async ({ status }, { dispatch, getState, rejectWithValue }) => {
    try {
      const {
        project: { currentPageProjectList, isSearching },
      } = getState() as RootState;

      if (!isSearching) {
        const { data }: GetOwnProjectResponse = await getOwnProjectsRequest(
          status,
          String(currentPageProjectList),
        );
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
