import { logoutUserRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LogoutUserActionProps } from '../types/authTypes';
import { removeUser } from '@/store/slices/userSlice';

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
