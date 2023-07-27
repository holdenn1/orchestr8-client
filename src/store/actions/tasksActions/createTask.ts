import { createTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateTaskActionProps, CreateTaskResponse } from '../types/tasksTypes';
import { setTask } from '@/store/slices/taskSlice';

export const createTask = createAsyncThunk<void, CreateTaskActionProps>(
  'task/createTask',
  async ({ task, projectId, navigate }, { dispatch }) => {
    try {
      const { data }: CreateTaskResponse = await createTaskRequest({ task }, projectId);
      if (data) {
        dispatch(setTask({ ...data }));
        navigate(`/profile/project/${projectId}/all-tasks`)
      }
    } catch (e) {
      console.error(e);
    }
  },
);
