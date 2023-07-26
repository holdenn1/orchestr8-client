import { UserRoles } from './userSliceTypes';

export type InitialStateProjectSlice = {
  allProjects:Project[]
  projectCount: ProjectCountPayload
}

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
  email: string;
  roles: UserRoles[];
};

export type Owner = Member;

export type ProjectTask = {
  id: number;
  task: string;
  completed: boolean;
  createAt: Date;
  updateAt: Date;
};

export type Project = {
  id: number;
  status: StatusProject;
  title: string;
  description: string;
  tasks: ProjectTask[];
  members: Member[];
  owner: Owner;
};

export type ProjectCountPayload = {
  totalCount: string;
  completed: string;
  'in-progress': string;
  suspend: string;
};

