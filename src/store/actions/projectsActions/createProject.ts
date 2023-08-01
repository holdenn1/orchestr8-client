import { createProjectRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateProjectActionProps } from '../types/projectTypes';

export const createProject = createAsyncThunk<void, CreateProjectActionProps>(
  'project/createProject',
  async ({ title, description, membersIds, navigate }) => {
    try {
      const { data } = await createProjectRequest({ title, description, membersIds });
      if (data) {
        navigate('/profile/projects/all-projects');
      }
    } catch (e) {
      console.error(e);
    }
  },
);
