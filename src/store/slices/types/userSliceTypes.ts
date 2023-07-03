export enum UserRoles {
  USER = 'user',
  PROJECT_OWNER = 'project_owner',
}

export type User = {
  userId: number;
  email: string;
  roles: UserRoles[];
};

export type InitialStateAccountSlice = {
  user: User;
};

