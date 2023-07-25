import { InitialValuesSignInForm, InitialValuesSignUpForm } from '@/components/forms/types';
import { StatusProject } from '@/store/slices/types/projectSliceTypes';
export type RegistrationUserData = Omit<InitialValuesSignUpForm, 'confirmPassword'>;

export type LoginUserData = InitialValuesSignInForm;

export type CreateProjectData = {
  title: string;
  description: string;
  membersIds: number[];
};

export type UpdateProjectData = {
  status?: StatusProject;
  title?: string;
  description?: string;
  members?: number[];
};
