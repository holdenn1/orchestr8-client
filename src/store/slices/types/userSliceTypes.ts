import { Project } from './projectSliceTypes';

export enum MemberRole {
  PROJECT_MEMBER = 'project_member',
  PROJECT_MANAGER = 'project_manager',
}

export type User = {
  id: number | null;
  firstName: string;
  lastName: string;
  photo: string | null;
  phone: string;
  email: string;
  memberProjects: Project[];
};

export type InitialStateAccountSlice = {
  user: User;
  isLoading: boolean;
};
