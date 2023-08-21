import { ChangeEvent, useRef, useState, useEffect } from 'react';
import MemberToProjectInput from '../../MemberToProjectInput';
import RecomendationMembers from '../../RecomendationMembers';
import SelectedMembers from '../../SelectedMembers';
import { Member, Project } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { searchUsersByEmail } from '@/store/actions/projectsActions/searchUsersByEmail';
import { notify } from '@/components/Toast';
import styles from './../../styles.module.scss';
import { useParams } from 'react-router-dom';
import { setRecomendationMemberVisible, setSelectedMembersVisible } from '@/store/slices/mainSlice';
import { AddMemberProps } from '../../types';

function AddMember({
  inputValue,
  setInputValue,
  selectedMembersList,
  setSelectedMembersList,
}: AddMemberProps) {
  const { projects } = useAppSelector((state) => state.project);
  const { selectedMembersVisible, recomendationMemberVisible } = useAppSelector((state) => state.main);
  const [recomendationMembersList, setRecomendationMembersList] = useState<Member[]>([]);
  const [currentProject, setCurrentProject] = useState<Project>();
  const debounceTimeoutRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const project = projects.find((project) => project.id === +projectId);
      setCurrentProject(project);
    }
  }, [projectId, projects]);

  async function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    dispatch(setSelectedMembersVisible(false));
    dispatch(setRecomendationMemberVisible(true));
    dispatch(searchUsersByEmail({ value, debounceTimeoutRef, setRecomendationMembersList }));
  }

  function handleUser(memberId: number) {
    const selectedMembers = recomendationMembersList.find((member) => member.id === memberId);
    const isAddedMemberToForm = selectedMembersList.some((member) => member.id === selectedMembers?.id);
    const isAddedMemberToProject = currentProject?.members.some(
      (member) => member.id === selectedMembers?.id,
    );

    if (selectedMembers && !isAddedMemberToForm && !isAddedMemberToProject) {
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
        selectedMembersVisible={selectedMembersVisible}
        removeMemberFromSelected={removeMemberFromSelected}
        selectedMembersList={selectedMembersList}
      />
    </div>
  );
}

export default AddMember;
