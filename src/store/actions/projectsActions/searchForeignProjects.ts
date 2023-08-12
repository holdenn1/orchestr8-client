import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchForeignProjectRequest } from '@/api/requests';
import { GetOwnProjectResponse, searchProjectsActionProps } from '../types/projectTypes';
import { clearForeignProjectsList, setForeignProjects, setIsSearching } from '@/store/slices/projectSlice';

export const searchForeignProjectsAction = createAsyncThunk<void, searchProjectsActionProps>(
  'project/searchForeignProjectsAction',
  async ({ value, debounceTimeoutRef, status }, { dispatch }) => {
    try {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(async () => {
        if (value.trim() !== '') {
          dispatch(setIsSearching(true));
          const { data }: GetOwnProjectResponse = await searchForeignProjectRequest(value, status);
          dispatch(clearForeignProjectsList());
          dispatch(setForeignProjects(data));
        } else {
          dispatch(setIsSearching(false));
        }
      }, 500);
    } catch (e) {
      console.error(e);
    }
  },
);
