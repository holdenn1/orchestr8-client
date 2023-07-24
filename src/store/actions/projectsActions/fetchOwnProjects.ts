import { getOwnProjectsRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetOwnProjectResponse } from '../types/projectTypes';
import { setAllProjects } from '@/store/slices/projectSlice';

export const fetchOwnProjects = createAsyncThunk('user/fetchOwnProjects', async (_, { dispatch }) => {
  try {
    const { data }: GetOwnProjectResponse = await getOwnProjectsRequest();
    dispatch(setAllProjects(data));
  } catch (e) {
    console.error(e);
  }
});
