import { useState } from 'react';
import { Formik, Form } from 'formik';
import projectFormValidationSchema from '@/utils/validate/projectFormValidationSchema';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import TextArea from 'ui/inputs/formInputs/TextArea';
import SubmitButton from 'ui/buttons/SubmitButton';
import { InitialValuesProjectForm } from 'components/forms/types';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { createProject } from '@/store/actions/projectsActions/createProject';
import { Member } from '@/store/slices/types/projectSliceTypes';
import { useNavigate } from 'react-router-dom';
import AddMember from './AddTaskForm/AddMember';
import { setIsMenu, setRecomendationMemberVisible, setSelectedMembersVisible } from '@/store/slices/mainSlice';

function ProjectForm() {
  const [selectedMembersList, setSelectedMembersList] = useState<Member[]>([]);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: InitialValuesProjectForm = {
    title: '',
    description: '',
  };

  function handleSubmit({ title, description }: InitialValuesProjectForm, resetForm: any) {
    const membersIds: number[] = selectedMembersList.map((member) => member.id);
    dispatch(
      createProject({
        title,
        description,
        membersIds,
        navigate,
      }),
    );
    setSelectedMembersList([]);
    setInputValue('');
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={projectFormValidationSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {() => (
        <div
          className={styles.projectFormWrapper}
          onClick={() => {
            dispatch(setSelectedMembersVisible(false));
            dispatch(setRecomendationMemberVisible(false));
            dispatch(setIsMenu(false))
          }}
        >
          <Form onClick={(e) => e.stopPropagation()}>
            <div>
              <TextInput name='title' type='text' label='Project name' placeholder='Project name' />
              <TextArea name='description' label='Project description' placeholder='Project description' />
              <AddMember
                inputValue={inputValue}
                selectedMembersList={selectedMembersList}
                setInputValue={setInputValue}
                setSelectedMembersList={setSelectedMembersList}
              />
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
