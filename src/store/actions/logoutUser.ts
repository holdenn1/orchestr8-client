import { logoutUserRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeUser } from '../slices/userSlice';
import { LogoutUserActionProps } from './types/authTypes';

export const logoutUser = createAsyncThunk<void, LogoutUserActionProps>(
  'user/logoutUser',
  async ({ navigate }, { dispatch }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        await logoutUserRequest(accessToken);
        localStorage.clear();
        navigate('/');
        dispatch(removeUser());
      }
    } catch (e) {
      console.error(e);
    }
  },
);
