import { MemberRole } from './userSliceTypes';

export type InitialStateProjectSlice = {
  ownProjects: Project[];
  foreignProjects: Project[];
  ownProjectCount: ProjectCountPayload;
  foreignProjectCount: ProjectCountPayload;
  currentPageOwnProjectList: number;
  currentPageForeignProjectList: number;
  isSearching: boolean;
  isLoading:boolean
};

export enum StatusProject {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in-progress',
  SUSPEND = 'suspend',
  RESUME = 'resume',
  ALL = 'all-projects',
}

export type Member = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  photo: string;
  email: string;
  role: MemberRole;
};

export type Owner = Omit<Member, 'role'>;

export type Project = {
  id: number;
  status: StatusProject;
  title: string;
  description: string;
  members: Member[];
  owner: Owner;
};

export type ProjectCountPayload = {
  totalCount: string;
  completed: string;
  'in-progress': string;
  suspend: string;
};

export type UpdateMemberRoleTypes = {
  projectId: number;
  memberId: number;
  role: MemberRole;
};
