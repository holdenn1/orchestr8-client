import { createProjectRequest } from '@/api/requests';
import { CreateProjectData } from '@/api/requests/types';
import { addOwnProject } from '@/store/slices/userSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateProjectResponse } from '../types/projectTypes.ts';

export const createProject = createAsyncThunk<void, CreateProjectData>(
  'user/createProject',
  async (dataProject, { dispatch }) => {
    const { data }: CreateProjectResponse = await createProjectRequest(dataProject);
    dispatch(addOwnProject({ ...data }));
  },
);
