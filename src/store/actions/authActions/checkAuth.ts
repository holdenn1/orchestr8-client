import { refreshTokensLogin } from '@/api/requests';
import { setUser } from '@/store/slices/userSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CheckAuthProps, RefreshTokensLoginResponse } from '../types/authTypes';

export const checkAuth = createAsyncThunk<void, CheckAuthProps>(
  'user/checkAuth',
  async ({ navigate }, { dispatch }) => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error();
      }
      const {
        data: { user, tokens },
      }: RefreshTokensLoginResponse = await refreshTokensLogin(refreshToken);
      localStorage.setItem('accessToken', tokens.accessToken);
      localStorage.setItem('refreshToken', tokens.refreshToken);
      dispatch(setUser(user));
    } catch (e) {
      navigate('/profile/projects');
      console.error(e);
    }
  },
);
