import { Member } from '@/store/slices/types/userSliceTypes';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';

export type SelectedMembersProps = {
  selectedMembersList: any[];
  setSelectedMembersVisible: Dispatch<SetStateAction<boolean>>;
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
