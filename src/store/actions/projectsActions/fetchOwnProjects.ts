import { getOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetOwnProjectResponse } from '../types/projectTypes';
import { setOwnProjects } from '@/store/slices/userSlice';

export const fetchOwnProjects = createAsyncThunk('user/fetchOwnProjects', async (_, { dispatch }) => {
  try {
    const { data }: GetOwnProjectResponse = await getOwnProjectsRequest();
    dispatch(setOwnProjects(data));
  } catch (e) {
    console.error(e);
  }
});
