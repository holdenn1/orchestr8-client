import { ChangeEvent, useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import projectFormValidationSchema from '@/utils/validate/projectFormValidationSchema';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import TextArea from 'ui/inputs/formInputs/TextArea';
import SubmitButton from 'ui/buttons/SubmitButton';
import { InitialValuesProjectForm } from 'components/forms/types';
import { setModal } from '@/store/slices/mainSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import MemberToProjectInput from './MemberToProjectInput';
import RecomendationMembers from './RecomendationMembers';
import SelectedMembers from './SelectedMembers';
import { createProject } from '@/store/actions/projectsActions/createProject';
import { Member } from '@/store/slices/types/userSliceTypes';
import { notify } from '@/components/Toast';
import { searchUsersByEmail } from '@/store/actions/projectsActions/searchUsersByEmail';

function ProjectForm() {
  const [recomendationMembersList, setRecomendationMembersList] = useState<Member[]>([]);
  const [selectedMembersList, setSelectedMembersList] = useState<Member[]>([]);
  const [recomendationMemberVisible, setRecomendationMemberVisible] = useState<boolean>(false);
  const [selectedMembersVisible, setSelectedMembersVisible] = useState<boolean>(false);
  const { modalVisible } = useAppSelector((state) => state.main);
  const [inputValue, setInputValue] = useState('');
  const debounceTimeoutRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();

  const initialValues: InitialValuesProjectForm = {
    titleProject: '',
    descriptionProject: '',
  };

  function handleSubmit({ titleProject, descriptionProject }: InitialValuesProjectForm, resetForm: any) {
    const membersIds: number[] = selectedMembersList.map((member) => member.id);

    dispatch(
      createProject({
        titleProject,
        descriptionProject,
        membersIds,
      }),
    );
    dispatch(setModal(!modalVisible));
    setSelectedMembersList([]);
    setInputValue('');
    resetForm();
  }

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
    <Formik
      initialValues={initialValues}
      validationSchema={projectFormValidationSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {() => (
        <div
          className={styles.projectFormwrapper}
          onClick={() => {
            setSelectedMembersVisible(false);
            setRecomendationMemberVisible(false);
          }}
        >
          <Form onClick={(e) => e.stopPropagation()}>
            <div>
              <TextInput name='titleProject' type='text' label='Project name' placeholder='Project name' />
              <TextArea
                name='descriptionProject'
                label='Project description'
                placeholder='Project description'
              />
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
              <div className={styles.submitBtnWrapper}>
                <SubmitButton>Create a project</SubmitButton>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ProjectForm;
