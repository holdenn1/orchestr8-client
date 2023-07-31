import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateTaskActionProps, UpdatedTaskRequest } from '../types/tasksTypes';
import { updateTaskRequest } from '@/api/requests';
import { updateTask } from '@/store/slices/taskSlice';

export const updateTaskAction = createAsyncThunk<void, UpdateTaskActionProps>(
  'task/updateTaskAction',
  async ({ taskId, updateData, navigate, projectId }, { dispatch }) => {
    try {
      const { data }: UpdatedTaskRequest = await updateTaskRequest(taskId, {
        ...updateData,
      });
      if (data) {
        dispatch(updateTask(data));
        navigate(`/profile/project/${projectId}/all-tasks`);
      }
    } catch (e) {
      console.error(e);
    }
  },
);
