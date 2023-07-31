export type InitialStateMainSlice = {
  isAddTaskForm: boolean;
  isEditTaskForm: boolean;
  isShowMembers: Boolean;
  selectedMembersVisible: boolean;
  recomendationMemberVisible: boolean;
  selectedOption: {
    sort: string;
    category: string;
  };
};
