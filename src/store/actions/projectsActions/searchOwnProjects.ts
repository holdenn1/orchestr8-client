import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchOwnProjectRequest } from '@/api/requests';
import { GetOwnProjectResponse, searchProjectsActionProps } from '../types/projectTypes';
import {  clearProjectsList, setIsSearching, setProjects } from '@/store/slices/projectSlice';

export const searchOwnProjectsAction = createAsyncThunk<void, searchProjectsActionProps>(
  'project/searchOwnProjectsAction',
  async ({ value, debounceTimeoutRef, status }, { dispatch }) => {
    try {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(async () => {
        if (value.trim() !== '') {
          dispatch(setIsSearching(true));
          const { data }: GetOwnProjectResponse = await searchOwnProjectRequest(value, status);
          dispatch(clearProjectsList());
          dispatch(setProjects(data));
        } else {
          dispatch(setIsSearching(false));
        }
      }, 500);
    } catch (e) {
      console.error(e);
    }
  },
);
