import { getOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetOwnProjectResponse } from '../types/projectTypes';
import { setOwnProjects } from '@/store/slices/userSlice';

export const fetchOwnProjects = createAsyncThunk('user/fetchOwnProjects', async (_, { dispatch }) => {
  const { data }: GetOwnProjectResponse = await getOwnProjectsRequest();
  dispatch(setOwnProjects(data));
});
