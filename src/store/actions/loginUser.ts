import { loginUserRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUserResponse, LoginUserActionProps } from './types/authTypes';
import { notify } from '@/components/Toast';
import { setUser } from '../slices/userSlice';

export const loginUser = createAsyncThunk<void, LoginUserActionProps>(
  'user/loginUser',
  async ({ loginValues, navigate, resetForm }, { dispatch }) => {
    try {
      const { data }: AuthUserResponse = await loginUserRequest(loginValues);
      const { userId, email, roles, accessToken, refreshToken } = data;
      dispatch(setUser({ userId, email, roles }));
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/profile');
      resetForm();
    } catch (e) {
      notify('Check field', 'error');
      console.log(e);
    }
  },
);
