import { getTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchTasksActionProps, FetchTasksResponse } from '../types/tasksTypes';
import { setTasks } from '@/store/slices/taskSlice';

export const fetchTasks = createAsyncThunk<void, FetchTasksActionProps>(
  'task/fetchTasks',
  async ({ projectId, statusTask }, { dispatch }) => {
    try {
      const { data }: FetchTasksResponse = await getTaskRequest(projectId, statusTask);
      if (data) {
        dispatch(setTasks(data));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
