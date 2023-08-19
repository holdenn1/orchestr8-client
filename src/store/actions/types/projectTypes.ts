import { MutableRefObject, Dispatch, SetStateAction } from 'react';
import { Member, Project, ProjectCountPayload } from '@/store/slices/types/projectSliceTypes';
import { NavigateFunction } from 'react-router-dom';
import { UpdateProjectData, UpdateTaskData } from '@/api/requests/types';

export type GetOwnProjectResponse = {
  data: Project[];
};

export type GetForeignProjectResponse = GetOwnProjectResponse

export type SearchUsersByEmailActionProps = {
  debounceTimeoutRef: MutableRefObject<number | null>;
  value: string;
  setRecomendationMembersList: Dispatch<SetStateAction<Member[]>>;
};

export type searchProjectsActionProps = {
  debounceTimeoutRef: MutableRefObject<number | null>;
  value: string;
  status: string
}

export type CreateProjectActionProps = {
  title: string;
  description: string;
  membersIds: number[];
  navigate: NavigateFunction;
};

export type UpdateProjectActionProps = {
  projectId:string
  updateProjectData: UpdateProjectData;
  updateTaskData?: UpdateTaskData;
  taskId?:string
  list?: string
};

export type UpdatedProjectRequest = {
  data: Project;
};

export type GetOwnProjectsCountActionResponse = {
  data: ProjectCountPayload[];
};

export type GetForeignProjectsCountActionResponse = GetOwnProjectsCountActionResponse
