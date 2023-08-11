import { createAsyncThunk } from '@reduxjs/toolkit';
import { geTasksCountsByStatusRequest } from '@/api/requests';
import { GeTasksCountActionResponse } from '../types/tasksTypes';
import { setTasksCount } from '@/store/slices/taskSlice';
import { TasksCountPayload } from '@/store/slices/types/taskSliceTypes';

export const getTasksCountAction = createAsyncThunk<void, { projectId: string }>(
  'project/getTasksCountAction',
  async ({ projectId }, { dispatch }) => {
    try {
      const { data }: GeTasksCountActionResponse = await geTasksCountsByStatusRequest(projectId);
      if (data.length) {
        data.forEach(({ totalCount, completed }) => {
          dispatch(setTasksCount({ totalCount, completed }));
        });
      } else {
        dispatch(setTasksCount({} as TasksCountPayload));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
