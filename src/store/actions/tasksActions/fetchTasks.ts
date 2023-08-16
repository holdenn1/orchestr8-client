import { getTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchTasksActionProps, FetchTasksResponse } from '../types/tasksTypes';
import { setCurrentPageTaskList, setTasks } from '@/store/slices/taskSlice';
import { RootState } from '@/store';

export const fetchTasks = createAsyncThunk<void, FetchTasksActionProps>(
  'task/fetchTasks',
  async ({ projectId, statusTask }, { dispatch, getState, rejectWithValue }) => {
    try {
      const {
        task: { currentPageTaskList },
      } = getState() as RootState;

      const { data }: FetchTasksResponse = await getTaskRequest(
        projectId,
        statusTask,
        String(currentPageTaskList),
      );

     
      if (data.length) {
        dispatch(setCurrentPageTaskList(currentPageTaskList + 1));
      }

      if (data) {
        dispatch(setTasks(data));
      }
    } catch (e) {
      console.error(e);
      rejectWithValue(false);
    }
  },
);
