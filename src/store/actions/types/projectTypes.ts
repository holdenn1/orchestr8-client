import { Project } from '@/store/slices/types/userSliceTypes';

export type CreateProjectResponse = {
  data: Project;
};

export type GetOwnProjectResponse = {
  data: Project[];
};
