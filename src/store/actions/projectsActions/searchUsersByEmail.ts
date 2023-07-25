import { createAsyncThunk } from '@reduxjs/toolkit';
import { FindedUsers } from '@/components/forms/ProjectForm/types';
import { searchUsersByEmailRequest } from '@/api/requests';
import { SearchUsersByEmailActionProps } from '../types/projectTypes';

export const searchUsersByEmail = createAsyncThunk<void, SearchUsersByEmailActionProps>(
  'user/searchUsersByEmail',
  async ({ value, debounceTimeoutRef, setRecomendationMembersList }) => {
    try {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(async () => {
        if (value.trim() !== '') {
          const { data }: FindedUsers = await searchUsersByEmailRequest(value);
          setRecomendationMembersList(data);
        } else {
          setRecomendationMembersList([]);
        }
      }, 500);
    } catch (e) {
      console.error(e);
    }
  },
);
