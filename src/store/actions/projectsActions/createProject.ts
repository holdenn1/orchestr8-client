import { createProjectRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateProjectActionProps } from '../types/projectTypes';

export const createProject = createAsyncThunk<void, CreateProjectActionProps>(
  'user/createProject',
  async ({ title, description, membersIds, navigate }) => {
    try {
      await createProjectRequest({ title, description, membersIds });
      navigate('/profile/projects');
    } catch (e) {
      console.error(e);
    }
  },
);
