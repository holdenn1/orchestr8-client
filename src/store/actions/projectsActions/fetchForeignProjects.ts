import { getForeignProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setForeignProjects } from '@/store/slices/projectSlice';
import { GetForeignProjectResponse } from '../types/projectTypes';

export const fetchForeignProjectsAction = createAsyncThunk<void, { status: string }>(
  'project/fetchForeignProjectsAction',
  async ({ status }, { dispatch }) => {
    try {
      const { data }: GetForeignProjectResponse = await getForeignProjectsRequest(status);

      if (data) {
        dispatch(setForeignProjects(data));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
