export enum UserRoles {
  USER = 'user',
  PROJECT_OWNER = 'project owner',
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
  taskText: string;
  completed: boolean;
};

export type Project = {
  id: number;
  status: StatusProject[];
  titleProject: string;
  descriptionProject: string;
  tasks: ProjectTask[];
  members: Member[];
  owner: Owner;
};

export type User = {
  id: number | null;
  firstName: string;
  lastName: string;
  photo: string | null;
  phone: string;
  email: string;
  roles: UserRoles[];
  ownedProjects: Project[];
  memberProjects: Project[];
};

export type InitialStateAccountSlice = {
  user: User;
};
