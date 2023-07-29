import { getProjectCountsByStatusRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetProjectsCountActionResponse } from '../types/projectTypes';
import { setProjectsCount } from '@/store/slices/projectSlice';

export const getProjectsCountAction = createAsyncThunk<void>(
  'project/getProjectsCountAction',
  async (_, { dispatch }) => {
    try {
      const { data }: GetProjectsCountActionResponse = await getProjectCountsByStatusRequest();
      if (data) {
        data.forEach(({ 'in-progress': inProgress, completed, suspend, totalCount }) => {
          dispatch(setProjectsCount({ 'in-progress': inProgress, completed, suspend, totalCount }));
        });
      }
    } catch (e) {
      console.error(e);
    }
  },
);
