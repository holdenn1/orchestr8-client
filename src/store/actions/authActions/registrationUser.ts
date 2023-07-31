import { registrationUserRequest } from '@/api/requests';
import { notify } from '@/components/Toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegistrationUserActionProps, AuthUserResponse } from '../types/authTypes';
import { setUser } from '@/store/slices/userSlice';

export const registrationUser = createAsyncThunk<void, RegistrationUserActionProps>(
  'user/registrationUser',
  async ({ registrationValues, setStep, resetForm, navigate }, { dispatch }) => {
    try {
      const {
        data: { user, accessToken, refreshToken },
      }: AuthUserResponse = await registrationUserRequest(registrationValues);

      if (user) {
        dispatch(setUser(user));
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/profile/projects/all-projects');
        setStep(0);
        resetForm();
      }
    } catch (e) {
      notify('Check field', 'error');
      console.error(e);
    }
  },
);
