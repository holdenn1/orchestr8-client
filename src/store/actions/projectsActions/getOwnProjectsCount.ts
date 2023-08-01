import { getOwnProjectCountsByStatusRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetOwnProjectsCountActionResponse } from '../types/projectTypes';
import { setOwnProjectsCount } from '@/store/slices/projectSlice';

export const getOwnProjectsCountAction = createAsyncThunk<void>(
  'project/getOwnProjectsCountAction',
  async (_, { dispatch }) => {
    try {
      const { data }: GetOwnProjectsCountActionResponse = await getOwnProjectCountsByStatusRequest();
      if (data) {
        data.forEach(({ 'in-progress': inProgress, completed, suspend, totalCount }) => {
          dispatch(setOwnProjectsCount({ 'in-progress': inProgress, completed, suspend, totalCount }));
        });
      }
    } catch (e) {
      console.error(e);
    }
  },
);
