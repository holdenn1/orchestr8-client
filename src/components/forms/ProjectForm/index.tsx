import { ChangeEvent, useState } from 'react';
import { Formik, Form, FormikValues } from 'formik';
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

function ProjectForm() {
  const [recomendationMembersList, setRecomendationMembersList] = useState<any[]>([]);
  const [selectedMembersList, setSelectedMembersList] = useState<any[]>([]);
  const [recomendationMemberVisible, setRecomendationMemberVisible] = useState<boolean>(false);
  const [selectedMembersVisible, setSelectedMembersVisible] = useState<boolean>(false);
  const { modalVisible } = useAppSelector((state) => state.main);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const membersListt = [
    {
      id: 1,
      email: 'ww@sd.com',
    },
    {
      id: 2,
      email: 'res@rs.com',
    },
    {
      id: 3,
      email: 'rres@rs.com',
    },
    {
      id: 4,
      email: 'reqws@rs.com',
    },
    {
      id: 5,
      email: 'resrs@rs.com',
    },
    {
      id: 6,
      email: 'res@rs.com',
    },
  ];

  const initialValues: InitialValuesProjectForm = {
    titleProject: '',
    descriptionProject: '',
  };

  function handleSubmit(values: FormikValues, resetForm: any) {
    const membersIds = selectedMembersList.map((member) => member.id);
    console.log({ ...values, membersIds });
    dispatch(setModal(!modalVisible));
    setSelectedMembersList([]);
    setInputValue('');
    resetForm();
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    setSelectedMembersVisible(false);
    setRecomendationMemberVisible(true);
    if (value === '') {
      console.log([]);
      setRecomendationMembersList([]);
    } else {
      const matchingMembers = membersListt.filter((member) => {
        return member.email.toLowerCase().includes(value);
      });
      setRecomendationMembersList(matchingMembers);
      console.log(matchingMembers);
    }
  }

  function handleUser(memberId: number) {
    setInputValue('');

    const selectedMembers = recomendationMembersList.find((member) => member.id === memberId);
    setSelectedMembersList([...selectedMembersList, selectedMembers]);

    const recomendationMembers = recomendationMembersList.filter((member) => {
      return member.id !== memberId;
    });
    setRecomendationMembersList(recomendationMembers);
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
