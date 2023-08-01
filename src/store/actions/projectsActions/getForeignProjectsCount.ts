import { getForeignProjectCountsByStatusRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetForeignProjectsCountActionResponse } from '../types/projectTypes';
import { setForeignProjectsCount } from '@/store/slices/projectSlice';

export const getForeignProjectsCountAction = createAsyncThunk<void>(
  'project/getForeignProjectsCountAction',
  async (_, { dispatch }) => {
    try {
      const { data }: GetForeignProjectsCountActionResponse = await getForeignProjectCountsByStatusRequest();
      if (data) {
        data.forEach(({ 'in-progress': inProgress, completed, suspend, totalCount }) => {
          dispatch(setForeignProjectsCount({ 'in-progress': inProgress, completed, suspend, totalCount }));
        });
      }
    } catch (e) {
      console.error(e);
    }
  },
);
