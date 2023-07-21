import { InitialValuesSignInForm, InitialValuesSignUpForm } from '@/components/forms/types';

export type RegistrationUserData = Omit<InitialValuesSignUpForm, 'confirmPassword'>;

export type LoginUserData = InitialValuesSignInForm;

export type CreateProjectData = {
  titleProject: string;
  descriptionProject: string;
  membersIds: number[];
};
