import { getOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setProjects } from '@/store/slices/projectSlice';
import { GetOwnProjectResponse } from '../types/projectTypes';

export const fetchOwnProjects = createAsyncThunk<void, { status: string }>(
  'user/fetchOwnProjects',
  async ({ status }, { dispatch }) => {
    try {
      const { data }: GetOwnProjectResponse = await getOwnProjectsRequest(status);

      if (data) {
        dispatch(setProjects(data));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
