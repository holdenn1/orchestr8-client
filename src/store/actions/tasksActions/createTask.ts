import { createTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateTaskActionProps, CreateTaskResponse } from '../types/tasksTypes';
import { setTask } from '@/store/slices/taskSlice';
import { setIsAddTaskForm } from '@/store/slices/mainSlice';

export const createTask = createAsyncThunk<void, CreateTaskActionProps>(
  'task/createTask',
  async ({ task, projectId }, { dispatch }) => {
    try {
      const { data }: CreateTaskResponse = await createTaskRequest({ task }, projectId);
      if (data) {
        // dispatch(setTask({ ...data }));
        dispatch(setIsAddTaskForm(false));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
