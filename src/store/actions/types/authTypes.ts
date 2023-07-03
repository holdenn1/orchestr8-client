import {
  InitialValuesSignInForm,
  InitialValuesSignUpForm,
} from '@/components/forms/types';
import { UserRoles } from '@/store/slices/types/userSliceTypes';
import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

export type RegistrationUserActionProps = {
  registrationValues: Omit<InitialValuesSignUpForm, 'confirmPassword'>;
  setStep: Dispatch<SetStateAction<number>>;
  resetForm: any;
  navigate: NavigateFunction;
};

export type AuthUserResponse = {
  data: {
    userId: number;
    email: string;
    roles: UserRoles[];
    accessToken: string;
    refreshToken: string;
  };
};

export type LoginUserActionProps = Omit<
  RegistrationUserActionProps,
  'setStep' | 'registrationValues'
> & {
  loginValues: InitialValuesSignInForm;
};

export type LogoutUserActionProps = Pick<RegistrationUserActionProps, 'navigate'>
