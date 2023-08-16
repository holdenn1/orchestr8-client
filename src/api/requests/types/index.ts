import { InitialValuesSignInForm, InitialValuesSignUpForm } from '@/components/forms/types';
import { StatusProject } from '@/store/slices/types/projectSliceTypes';
import { MemberRole } from '@/store/slices/types/userSliceTypes';
export type RegistrationUserData = Omit<InitialValuesSignUpForm, 'confirmPassword'>;

export type LoginUserData = InitialValuesSignInForm;

export type CreateProjectData = {
  title: string;
  description: string;
  membersIds: number[];
};

export type CreateTaskData = {
  task: string;
};

export type UpdateProjectData = {
  status?: StatusProject;
  title?: string;
  description?: string;
  membersIds?: number[];
};

export type UpdateTaskData = {
  task?: string
  completed?: boolean
}

export type UpdateMemberRole = {
  memberRole: MemberRole
}