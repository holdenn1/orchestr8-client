import { MutableRefObject, Dispatch, SetStateAction } from 'react';
import { Member, Project } from '@/store/slices/types/projectSliceTypes';
import { NavigateFunction } from 'react-router-dom';

export type GetOwnProjectResponse = {
  data: Project[];
};

export type SearchUsersByEmailProps = {
  debounceTimeoutRef: MutableRefObject<number | null>;
  value: string;
  setRecomendationMembersList: Dispatch<SetStateAction<Member[]>>;
};

export type CreateProjectProps = {
  title: string;
  description: string;
  membersIds: number[];
  navigate: NavigateFunction
}