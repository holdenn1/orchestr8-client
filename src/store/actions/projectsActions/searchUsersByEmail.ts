import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Member } from '@/store/slices/types/userSliceTypes';
import { FindedUsers } from '@/components/forms/ProjectForm/types';
import { searchUsersByEmailRequest } from '@/api/requests';

type SearchUsersByEmailProps = {
  debounceTimeoutRef: MutableRefObject<number | null>;
  value: string;
  setRecomendationMembersList: Dispatch<SetStateAction<Member[]>>;
};

export const searchUsersByEmail = createAsyncThunk<void, SearchUsersByEmailProps>(
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
