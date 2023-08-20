import { Member } from '@/store/slices/types/projectSliceTypes';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export type SelectedMembersProps = {
  selectedMembersList: any[];
  selectedMembersVisible: boolean;
  removeMemberFromSelected: (memberId: number) => void;
};

export type RecomendationMembersProps = {
  handleUser: (memberId: number) => void;
  recomendationMembersList: any[];
  recomendationMemberVisible: boolean;
};

export type MemberToProjectInputProps = {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

export type FindedUsers = {
  data: Member[];
};

export type AddMemberProps = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  selectedMembersList: Member[];
  setSelectedMembersList: Dispatch<React.SetStateAction<Member[]>>;
};

export type InitialValuesEditProjectAndTaskForm = {
  title: string;
  description: string;
  task: string;
};
