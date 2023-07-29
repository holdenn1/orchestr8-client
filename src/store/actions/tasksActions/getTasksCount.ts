import { createAsyncThunk } from '@reduxjs/toolkit';
import { geTasksCountsByStatusRequest } from '@/api/requests';
import { GeTasksCountActionResponse } from '../types/tasksTypes';
import { setTasksCount } from '@/store/slices/taskSlice';

export const getTasksCountAction = createAsyncThunk<void, { projectId: string }>(
  'project/getTasksCountAction',
  async ({ projectId }, { dispatch }) => {
    try {
      const { data }: GeTasksCountActionResponse = await geTasksCountsByStatusRequest(projectId);
      if (data) {
        data.forEach(({ totalCount, completed }) => {
          dispatch(setTasksCount({ totalCount, completed }));
        });
      }
    } catch (e) {
      console.error(e);
    }
  },
);
