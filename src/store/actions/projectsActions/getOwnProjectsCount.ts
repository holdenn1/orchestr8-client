import { getOwnProjectCountsByStatusRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetOwnProjectsCountActionResponse } from '../types/projectTypes';
import { setOwnProjectsCount } from '@/store/slices/projectSlice';
import { ProjectCountPayload } from '@/store/slices/types/projectSliceTypes';

export const getOwnProjectsCountAction = createAsyncThunk<void>(
  'project/getOwnProjectsCountAction',
  async (_, { dispatch }) => {
    try {
      const { data }: GetOwnProjectsCountActionResponse = await getOwnProjectCountsByStatusRequest();
      if (data.length) {
        data.forEach(({ 'in-progress': inProgress, completed, suspend, totalCount }) => {
          dispatch(setOwnProjectsCount({ 'in-progress': inProgress, completed, suspend, totalCount }));
        });
      } else {
        dispatch(setOwnProjectsCount({} as ProjectCountPayload));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
