import { updateOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateProjectActionProps, UpdatedProjectRequest } from '../types/projectTypes';
import { updateProject } from '@/store/slices/projectSlice';

export const updateProjectAction = createAsyncThunk<void, UpdateProjectActionProps>(
  'project/updateProject',
  async ({ updateData, project }, { dispatch }) => {
    try {
      const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(String(project.id), {
        ...updateData,
      });
      if (data) {
        dispatch(updateProject(data));
      }
    } catch (e) {
      console.error(e);
    }
  },
);
