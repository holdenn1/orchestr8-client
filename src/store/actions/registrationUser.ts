import { registrationUserRequest } from '@/api/requests';
import { notify } from '@/components/Toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from '../slices/userSlice';
import { RegistrationUserActionProps, AuthUserResponse } from './types/authTypes';

export const registrationUser = createAsyncThunk<void, RegistrationUserActionProps>(
  'user/registrationUser',
  async ({ registrationValues, setStep, resetForm, navigate }, { dispatch }) => {
    try {
      const { data }: AuthUserResponse = await registrationUserRequest(registrationValues);
      const { user, accessToken, refreshToken } = data;

      dispatch(setUser(user));
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/profile/projects');
      setStep(0);
      resetForm();
    } catch (e) {
      notify('Check field', 'error');
      console.log(e);
    }
  },
);
