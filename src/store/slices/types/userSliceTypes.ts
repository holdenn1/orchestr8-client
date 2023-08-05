import { Project } from "./projectSliceTypes";

export enum UserRoles {
  USER = 'user',
  PROJECT_OWNER = 'project owner',
  PROJECT_MANAGER = 'project manager',
}


export type User = {
  id: number | null;
  firstName: string;
  lastName: string;
  photo: string | null;
  phone: string;
  email: string;
  roles: UserRoles[];
  memberProjects: Project[];
};

export type InitialStateAccountSlice = {
  user: User;
};
