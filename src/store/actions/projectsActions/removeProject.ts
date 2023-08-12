import { removeOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

export const removeProjectAction = createAsyncThunk<
  void,
  { projectId: string | undefined; navigate: NavigateFunction }
>('project/removeProjectAction', async ({ navigate, projectId }) => {
  try {
    if (projectId) {
      const project = await removeOwnProjectsRequest(projectId);
      if (project) {
        navigate('/profile/own/projects/all-projects');
      }
    }
  } catch (e) {
    console.error(e);
  }
});
