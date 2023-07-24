import { UserRoles } from './userSliceTypes';

export type InitialStateProjectSlice = {
  inProgressProjects: Project[],
  completedProjects: Project[],
  suspendProjects: Project[]
  allProjects:Project[]
}

export enum StatusProject {
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
  SUSPEND = 'Suspend',
  RESUME = 'Resume',
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
