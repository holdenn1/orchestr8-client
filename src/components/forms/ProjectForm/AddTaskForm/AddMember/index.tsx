import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import MemberToProjectInput from '../../MemberToProjectInput';
import RecomendationMembers from '../../RecomendationMembers';
import SelectedMembers from '../../SelectedMembers';
import { Member } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { searchUsersByEmail } from '@/store/actions/projectsActions/searchUsersByEmail';
import { notify } from '@/components/Toast';
import styles from './../../styles.module.scss'

type AddMemberProps = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  selectedMembersVisible: boolean;
  setSelectedMembersVisible: Dispatch<SetStateAction<boolean>>;
  recomendationMemberVisible: boolean;
  setRecomendationMemberVisible: Dispatch<SetStateAction<boolean>>;
  selectedMembersList: Member[];
  setSelectedMembersList: Dispatch<React.SetStateAction<Member[]>>;
};

function AddMember({
  inputValue,
  recomendationMemberVisible,
  selectedMembersVisible,
  setInputValue,
  setRecomendationMemberVisible,
  setSelectedMembersVisible,
  selectedMembersList,
  setSelectedMembersList,
}: AddMemberProps) {
  const [recomendationMembersList, setRecomendationMembersList] = useState<Member[]>([]);
  const debounceTimeoutRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();

  async function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    setSelectedMembersVisible(false);
    setRecomendationMemberVisible(true);
    dispatch(searchUsersByEmail({ value, debounceTimeoutRef, setRecomendationMembersList }));
  }

  function handleUser(memberId: number) {
    const selectedMembers = recomendationMembersList.find((member) => member.id === memberId);
    const isMember = selectedMembersList.some((member) => member.id === selectedMembers?.id);
    if (selectedMembers && !isMember) {
      setInputValue('');
      setSelectedMembersList([...selectedMembersList, selectedMembers]);
      const recomendationMembers = recomendationMembersList.filter((member) => {
        return member.id !== memberId;
      });
      setRecomendationMembersList(recomendationMembers);
      notify('Member added', 'success');
    } else {
      notify('Member has already been added', 'warning');
    }
  }

  function removeMemberFromSelected(memberId: number) {
    const members = selectedMembersList.filter((member) => member.id !== memberId);
    setSelectedMembersList(members);
  }

  return (
    <div className={styles.addUserInputWrapper}>
      <MemberToProjectInput handleInput={handleInput} inputValue={inputValue} />
      <RecomendationMembers
        handleUser={handleUser}
        recomendationMemberVisible={recomendationMemberVisible}
        recomendationMembersList={recomendationMembersList}
      />
      <SelectedMembers
        setSelectedMembersVisible={setSelectedMembersVisible}
        selectedMembersVisible={selectedMembersVisible}
        removeMemberFromSelected={removeMemberFromSelected}
        selectedMembersList={selectedMembersList}
      />
    </div>
  );
}

export default AddMember;
