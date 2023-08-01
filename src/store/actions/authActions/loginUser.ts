import { loginUserRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUserResponse, LoginUserActionProps } from '../types/authTypes';
import { notify } from '@/components/Toast';
import { setUser } from '@/store/slices/userSlice';

export const loginUser = createAsyncThunk<void, LoginUserActionProps>(
  'user/loginUser',
  async ({ loginValues, navigate, resetForm }, { dispatch }) => {
    try {
      const {
        data: { user, accessToken, refreshToken },
      }: AuthUserResponse = await loginUserRequest(loginValues);
      if (user) {
        dispatch(setUser(user));
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/profile/own/projects/all-projects');
        resetForm();
      }
    } catch (e) {
      notify('Check field', 'error');
      console.error(e);
    }
  },
);
