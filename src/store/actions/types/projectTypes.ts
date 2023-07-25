import { MutableRefObject, Dispatch, SetStateAction } from 'react';
import { Member, Project } from '@/store/slices/types/projectSliceTypes';
import { NavigateFunction } from 'react-router-dom';
import { UpdateProjectData } from '@/api/requests/types';

export type GetOwnProjectResponse = {
  data: Project[];
};

export type SearchUsersByEmailActionProps = {
  debounceTimeoutRef: MutableRefObject<number | null>;
  value: string;
  setRecomendationMembersList: Dispatch<SetStateAction<Member[]>>;
};

export type CreateProjectActionProps = {
  title: string;
  description: string;
  membersIds: number[];
  navigate: NavigateFunction
}

export type UpdateProjectActionProps = {
  project: Project;
  updateData: UpdateProjectData;
};

export type UpdatedProjectRequest = {
  data: Project;
};
